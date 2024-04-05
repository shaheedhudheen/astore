const Cart = require("../models/cartModel")
const Post = require("../models/postModel")

const addToCart = async (req, res) => {
  try {
    const { _id } = req.user //id of user

    const { id } = req.params //id of the item

    const item = await Post.findById(id) //find item from database

    const userCart = await Cart.findOne({ userId: _id }) //find user in cart DB using user ID

    // check user already added items to cart
    if (!userCart) {
      // if not create a new cart document and add item
      await Cart.create({
        userId: _id,
        items: item,
      })
      return res.json(item)
    } else {
      const cartDoc = await Cart.findOne({ userId: _id }) // if user already added item to cart
      cartDoc.items.push(item)
      await cartDoc.save() // update cart with new items
      return res.json(item)
    }
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

const clearCart = async (req, res) => {
  try {
    const { _id } = req.user //id of the user
    const userCart = await Cart.findOne({ userId: _id }) //find user in cart DB using user ID
    await userCart.updateOne({
      items: [], // Set the items field to an empty array
    })

    res.send("Cart cleared")
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

const removeItem = async (req, res) => {
  const { _id } = req.user // id of the user
  const { id } = req.params // id of the item to remove from cart

  let cart = await Cart.findOneAndUpdate(
    { userId: _id },
    { $pull: { items: id } },
    { new: true }
  )

  res.json(cart)
}

const cartItems = async (req, res) => {
  const { _id } = req.user //user id

  const cart = await Cart.findOne({ userId: _id })
    .populate("items")
    .lean() //find user in cart DB using user ID
  console.log(cart)
  res.json(cart)
}

module.exports = { addToCart, clearCart, removeItem, cartItems }
