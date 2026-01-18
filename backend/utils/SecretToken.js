require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, { //TOKEN_KEY is to verify the token
    expiresIn: 7 * 24 * 60 * 60, // 7 days
  });
};