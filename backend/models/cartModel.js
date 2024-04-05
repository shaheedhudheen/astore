const mongoose = require("mongoose")

const { Schema, model } = mongoose

const CartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
})

const Cart = model("Cart", CartSchema)

module.exports = Cart
