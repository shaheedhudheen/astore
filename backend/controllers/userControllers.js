const User = require("../models/userModel.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const salt = bcrypt.genSaltSync(10)

const genarateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10d" })
}

//Register User
const userRegister = async (req, res) => {
  try {
    //! get all data from body
    const { username, email, password } = req.body

    //! confirm all data exists
    if (!(username && email && password)) {
      return res.status(400).json("Please fill all the Fields")
    }

    //! check user already exists
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(401).json("A user with this Username already exists")
    }

    //! encrypt password
    const encryPass = bcrypt.hashSync(password, salt)

    //! Save user to Database
    const userDoc = await User.create({
      username: username,
      email: email,
      password: encryPass,
    }).catch((error) => {
      console.log(error)
      return res.status(401).json("A user with this Email already exists")
    })

    //! to avoid sending password to client
    userDoc.password = null

    res.status(201).json(userDoc)
  } catch (error) {
    res.status(400).json(error)
  }
}

// Login User
const userLogin = async (req, res) => {
  try {
    //! import data from clint
    const { email, password } = req.body
    //! validate all fields present
    if (!(email && password)) {
      return res.status(404).json("Please fill all the Fields")
    }
    //! find user in DB
    const userDoc = await User.findOne({ email })
    console.log(userDoc)
    //! if user not found
    if (!userDoc) {
      return res.status(400).json("Credentials doesn't match our records")
    }

    //! send response if user present
    if (userDoc && (await bcrypt.compare(password, userDoc.password))) {
      //! Genarate Token
      const token = genarateToken({
        id: userDoc._id,
        username: userDoc.username,
      })

      //? cookie Options
      const options = {
        // current time + 3 (days) * 24 (hour) * 60 (min) * 60 (sec) * 1000 (milliseconds)
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }

      res.cookie("token", token, options).json({
        id: userDoc._id,
        username: userDoc.username,
      })
    } else {
      res.status(400).json("Invalid Credentials")
    }
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

//userProfile
const userProfile = (req, res) => {
  const { token } = req.cookies
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  res.json(decoded)
}

//Logout User
const userLogout = (req, res) => {
  res.cookie("token", "").json("Logged Out")
}

module.exports = { userLogin, userRegister, userProfile, userLogout }
