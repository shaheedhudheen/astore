

const CartItemCard = (props) => {
  const { image, title, price, _id } = props
  
  
  return (
    <div className="p-1 rounded-md m-2 border border-gray-300 flex gap-10">
      <img
        src={"http://localhost:3000/" + image}
        alt=""
        className="rounded-md  max-h-[175px] object-cover"
      />
      <div className="my-2 space-y-2 ">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <h4 className="text-lg font-semibold text-gray-800">${price}</h4>
        <div className="space-x-3">
          {/* <button className="bg-green-700 hover:bg-green-800" onClick={clearCart}>Buy</button> */}
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
