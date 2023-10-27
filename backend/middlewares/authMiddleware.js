const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const auth = async (req, res, next) => {
  //get token from cookie
  const { token } = req.cookies
  try {
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //get user info from token
    req.user = await User.findById(decoded.id).select("-password")

    next()
  } catch (error) {
    console.log(error)
    res.status(401)
    throw new Error("Not authorized")
  }

  if (!token) {
    res.status(401)
    throw new Error("No authorized, Sign In")
  }
}

module.exports = auth
