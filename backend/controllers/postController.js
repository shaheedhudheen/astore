const Post = require("../models/postModel")

const createPost = async (req, res) => {
  const { category, title, description, price, location } = req.body
  const { path } = req.file
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
    res.status(400)
    console.log(error)
  }
}

const displayPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId")
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

const singlePost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id).populate("userId", ["username"])
    res.json(post)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

const editPost = async (req, res) => {
  //user id from token
  const { _id } = req.user
  //id of editing post
  const { id } = req.body
  //Post Information from body
  const { category, title, description, price, location } = req.body
  //Image Path
  const { path } = req.file
  try {
    //get post using id
    const postDoc = await Post.findById(id)

    //compare post userId to token id (to verify editing user is logged in user)
    const isUser = JSON.stringify(_id) === JSON.stringify(postDoc.userId)

    if (!isUser) {
      return res.json("Invalid User")
    }

    const update = await postDoc.updateOne({
      category,
      title,
      description,
      price,
      location,
      image: path,
    })

    res.json(update)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

const deletePost = async (req, res) => {
  //id of Post
  const { id } = req.params

  //user id from decoded jwt token
  const { _id } = req.user

  try {
    //get post using item ID
    const postDoc = await Post.findById(id)

    //compare post userId to token id (to verify editing user is logged in user)
    const isUser = JSON.stringify(_id) === JSON.stringify(postDoc.userId)

    //checks user is valid or not
    if (!isUser) {
      return res.json("Invalid User")
    }

    const deletedPost = await Post.findByIdAndDelete(id)

    res.json(deletedPost)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

module.exports = { createPost, displayPosts, singlePost, editPost, deletePost }
