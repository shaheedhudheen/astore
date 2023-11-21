import CartItemCard from "../components/CartItemCard"
import useCartStore from "../utils/cartStore"

// function BearCounter() {
//   const bears = useBearStore((state) => state.bears)
//   return <h1>{bears} around here ...</h1>
// }

// function Controls() {
//   const increasePopulation = useBearStore((state) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems)

  return (
    <div className="max-w-screen-xl mx-auto h-screen bg-slate-400">
      <h1 className="text-6xl font-bold my-3">Cart</h1>
      <p className=""> There are {0} items in your cart</p>
      <div>
        {cartItems.map((item) => (
          <CartItemCard {...item} key={item._id} />
        ))}
      </div>
    </div>
  )
}

export default Cart
