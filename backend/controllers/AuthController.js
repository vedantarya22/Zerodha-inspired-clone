const {UsersModel} = require("../model/UserModel");
const {createSecretToken} = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

const isProd = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,                    //  must be true 
  secure: isProd,                    //  true on Render (https)
  sameSite: isProd ? "none" : "lax",  //  cross-site cookie allowed
  path : "/",
 maxAge: 7 * 24 * 60 * 60 * 1000,
};


module.exports.Signup = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
           if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        //check if user already exists
        const existingUser = await UsersModel.findOne({email});

        if(existingUser){
          return res.status(400).json({
            message: "User already exists",
            success: false
          });
        }

        // create new user
        const user = await UsersModel.create({email,password});
        const token = createSecretToken(user._id);
          res.cookie("token", token, cookieOptions);
          console.log("Set-Cookie header:", res.getHeader("Set-Cookie"));

        return res.status(201).json({
            message:"User signed in successfully",
            success: true,
            user: {
                id: user._id,
                email: user.email
            }
        });  
    }   catch(err){
            console.error("Signup error: ", err);
            return res.status(500).json({
                message: "Internal server error",
                success: false
            });
    }
};

module.exports.Login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "all fields are required",
                success: false
            });
        }
        const user = await UsersModel.findOne({email});
        
        if(!user){
            return res.status(401).json({
                message: "incorrect password or email",
                success: false
            });
        }
        const auth = await bcrypt.compare(password,user.password)
        if(!auth){
            return res.status(401).json({
                message: "Incorrect password or email",
                success : false
            });
        }

         // Create token and set cookie
        const token = createSecretToken(user._id);
          res.cookie("token", token, cookieOptions);

          return res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user: {
                id: user._id,
                email: user.email
            }
          });
    }catch(err){
        console.error("Login error:", err);
        return res.status(500).json({
            message: "Internal server error",

            success: false
        });
    }
}

