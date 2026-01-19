const {UsersModel} = require("../model/UserModel");
require("dotenv").config();

const jwt = require("jsonwebtoken");


    
module.exports.userVerification = (req,res)=>{
    const token = req.cookies.token
    console.log("token check");
    console.log(token);
    if(!token){
        return res.json({status:false})
    }

    jwt.verify(token,process.env.TOKEN_KEY,async(err,data)=>{
        if(err){
            return res.json({status:false})
        }else{
            const user = await UsersModel.findById(data.id)
            if(user) return res.json({status:true,user})
                else return res.json({status:false})
        }
    })
}


module.exports.requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);


    if (!token) {
      return res.status(401).json({ success: false, message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await UsersModel.findById(decoded.id).select("_id email");
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    // attach user to request
    req.user = {
      id: user._id,
      email: user.email,
    };

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized / Invalid token" });
  }
};