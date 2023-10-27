const express = require("express")
const router = express.Router()
const {
  userLogin,
  userRegister,
  userProfile,
  userLogout,
} = require("../controllers/userControllers")

router.post("/login", userLogin)
router.post("/register", userRegister)
router.get("/user", userProfile)
router.get("/logout", userLogout)

module.exports = router
