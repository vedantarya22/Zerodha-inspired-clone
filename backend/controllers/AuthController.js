const {UsersModel} = require("../model/UserModel");
const {createSecretToken} = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");


module.exports.Signup = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const existingUser = await UsersModel.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const user = await UsersModel.create({email,password});
        const token = createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials: true,
            httpOnly:false,
        });

        res
        .status(201)
        .json({message:"User signed in successfully",sucess:true,user});
        next();

    }catch(err){
        console.error(err);
    }
};

module.exports.Login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({message:"All fields are required"})
        }
        const user = await UsersModel.findOne({email});
        
        if(!user){
            return res.json({message:"Incorrect password or email"})
        }
        const auth = await bcrypt.compare(password,user.password)
        if(!auth){
            return res.json({message:"Incorrect password or email"})
        }
        const token = createSecretToken(user._id)
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });
        res.status(201).json({message:"User logged in successfully",success:true});
        next()
    }catch(err){
        console.log(err);
    }
}

