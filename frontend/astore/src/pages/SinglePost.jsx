import { useContext, useEffect, useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import Button from "../components/Button"
import UserContext from "../contexts/UserContext"
import useCartStore from "../utils/cartStore"

const SinglePost = () => {
  const { id } = useParams()
  const [postInfo, setPostInfo] = useState(null)
  const { user } = useContext(UserContext)
  const [redirect, setRedirect] = useState(false)

  const addToCart = useCartStore((state) => state.addItem)

  const getPostInfo = async () => {
    const response = await fetch(`http://localhost:3000/post/${id}`)
    const data = await response.json()
    setPostInfo(data)
  }

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/post/${id}`, {
      method: "DELETE",
      credentials: "include",
    })

    if (response.ok) {
      setRedirect(true)
    }
  }

  useEffect(() => {
    getPostInfo()
  }, [])

  const handleCartButton = () => {
    addToCart(postInfo)
  }

  if (!postInfo) return null
  if (redirect) return <Navigate to={`/`} />

  return (
    <div className="max-w-screen-xl mx-auto h-screen grid grid-cols-2">
      <div className="space-y-8 p-8">
        <div>
          <img
            src={"http://localhost:3000/" + postInfo.image}
            alt=""
            className="rounded-lg shadow-md aspect-square object-cover"
          />
        </div>
        <div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-700">Details</h3>
            <p className="text-xl text-gray-600 font-semibold">
              Type: {postInfo.category}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex gap-10 items-center">
          <p className="text-4xl font-bold text-gray-800">{postInfo.title}</p>
        </div>
        <div className="flex gap-10 items-center">
          <p className="text-2xl font-bold text-gray-600">
            Price: ${postInfo.price}
          </p>
          <Button
            name="Add To Cart"
            style="bg-blue-700"
            handleClick={handleCartButton}
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-700">Description</h3>
          <p className="text-lg font-semibold text-gray-600">
            {postInfo.description}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-700">Location</h3>
          <p className="text-lg font-semibold text-gray-600">
            {postInfo.location}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-700">Seller</h3>
          <p className="text-lg font-semibold text-gray-600">
            {postInfo.userId.username}
          </p>
        </div>

        {user?.id === postInfo?.userId?._id && (
          <div className="space-x-4 py-2">
            <Link to={`/post/${postInfo._id}/edit`}>
              <button className="bg-green-300 px-4 py-2 rounded-lg text-lg font-semibold text-gray-700">
                Edit
              </button>
            </Link>
            <button
              className="bg-red-400 px-4 py-2 rounded-lg text-lg font-semibold text-gray-700"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SinglePost

//!from zustand DOCS
// function BearCounter() {
//   const bears = useBearStore((state) => state.bears)
//   return <h1>{bears} around here ...</h1>
// }
// function Controls() {
//   const increasePopulation = useBearStore((state) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }
