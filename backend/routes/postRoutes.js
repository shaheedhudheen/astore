const express = require("express")
const router = express.Router()
const multer = require("multer")
const upload = multer({ dest: "uploads/" })
const { createPost } = require("../controllers/postController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/", authMiddleware, upload.single("photo"), createPost)

module.exports = router
