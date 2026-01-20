const {UsersModel} = require("../model/UserModel");
require("dotenv").config();

const jwt = require("jsonwebtoken");


    
module.exports.userVerification = (req, res) => {
    const token = req.cookies.token;
    
    console.log("=== VERIFICATION CHECK ===");
    console.log("Token exists:", !!token);
    
    if (!token) {
        console.log("❌ No token found");
        return res.json({status: false, message: "No token provided"});
    }

    jwt.verify(token, process.env.TOKEN_KEY, async(err, data) => {
        if (err) {
            console.log("❌ JWT verify error:", err.message);
            
            // Clear the expired/invalid cookie
            res.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
                path: "/",
            });
            
            return res.json({
                status: false, 
                message: err.name === "TokenExpiredError" ? "Token expired" : "Invalid token"
            });
        }
        
        try {
            const user = await UsersModel.findById(data.id);
            if (user) {
                console.log(" User verified:", user.email);
                return res.json({
                    status: true, 
                    user: {id: user._id, email: user.email}
                });
            } else {
                console.log("❌ User not found");
                return res.json({status: false, message: "User not found"});
            }
        } catch (dbErr) {
            console.error("❌ Database error:", dbErr);
            return res.json({status: false, message: "Server error"});
        }
    });
};


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