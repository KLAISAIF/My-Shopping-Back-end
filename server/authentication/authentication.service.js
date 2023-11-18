const jwt = require("jsonwebtoken");
const JWT_SECRET = "my_secret_string";
const generateToken = (user,expiresIn) => {
    const token = jwt.sign({ user }, JWT_SECRET, { expiresIn })
    return token;
  };
  module.exports = {generateToken};