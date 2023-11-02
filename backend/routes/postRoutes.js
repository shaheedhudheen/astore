const express = require("express")
const router = express.Router()
const multer = require("multer")
const upload = multer({ dest: "uploads/" })
const authMiddleware = require("../middlewares/authMiddleware")
const {
  createPost,
  displayPosts,
  singlePost,
  editPost,
  deletePost,
} = require("../controllers/postController")

router
  .get("/", displayPosts)
  .post("/", authMiddleware, upload.single("photo"), createPost)
  .put("/", authMiddleware, upload.single("photo"), editPost)

router.get("/:id", singlePost).delete("/:id", authMiddleware, deletePost)

module.exports = router
