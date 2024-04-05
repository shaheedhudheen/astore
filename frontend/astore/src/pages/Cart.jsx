// import CartItemCard from "../components/CartItemCard"

import useCart from "../utils/useCart"

const Cart = () => {
  const { cartItems, clearCart, removeItem } = useCart((state) => ({
    cartItems: state.items,
    clearCart: state.clearCart,
    removeItem: state.removeItem,
  }))

  const handleClearCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "DELETE",
        credentials: "include",
      })

      if (response.ok) {
        clearCart()
      } else {
        alert(await response.json())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveItem = async (item) => {
    console.log(item);
    try {
      const response = await fetch(`http://localhost:3000/cart/${item._id}`, {
        method: "DELETE",
        credentials: "include",
      })

      if (response.ok) {
        removeItem(item._id)
      } else {
        alert(await response.json())
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(cartItems)

  return (
    <div className="max-w-screen-xl mx-auto h-screen ">
      <h1 className="text-6xl font-bold my-3">Cart</h1>
      <p className="mt-4 text-xl">
        There is {cartItems.length} items in your cart
      </p>

      <div className="text-xl mt-4">
        Total: ₹
        {cartItems.reduce((total, item) => {
          return total + item.price
        }, 0)}
      </div>

      <button
        className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none bg-red-500 my-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <button className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none bg-green-500 my-4 mx-4">
        Checkout
      </button>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            className=" rounded-lg shadow-md flex gap-2"
            id="item"
            key={Math.random()}
          >
            <div id="image">
              <img
                src={"http://localhost:3000/" + item.image}
                alt=""
                className="aspect-square object-cover w-64 p-2"
              />
            </div>
            <div id="info">
              <p className="pt-4 text-xl font-semibold">{item.title}</p>
              <p className="pt-4 text-xl font-semibold">₹{item.price}</p>
              <button
                className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none bg-red-500 my-4"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
