const mongoose = require("mongoose")

const { Schema, model } = mongoose

const PostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
})

const Post = model("Post", PostSchema)

module.exports =  Post
