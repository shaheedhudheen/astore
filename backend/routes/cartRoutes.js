const express = require("express")
const router = express.Router()
const {
  addToCart,
  clearCart,
  removeItem,
  cartItems,
} = require("../controllers/cartController")
const authMiddleware = require("../middlewares/authMiddleware")

router
  .get("/", authMiddleware, cartItems)
  .post("/:id", authMiddleware, addToCart)
  .delete("/:id", authMiddleware, removeItem)
  .delete("/", authMiddleware, clearCart)

module.exports = router
