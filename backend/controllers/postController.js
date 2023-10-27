const Post = require("../models/postModel")

const createPost = async (req, res) => {
  const { category, title, description, price, location } = req.body
  const { path  } = req.file
  const user = req.user
  try {
    const postDoc = await Post.create({
      userId: user._id,
      image: path,
      title,
      category,
      description,
      price,
      location,
    })

    res.json(postDoc)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

module.exports = { createPost }
