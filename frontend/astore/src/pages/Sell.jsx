import { useState } from "react"
import { Navigate } from "react-router-dom"

const Sell = () => {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState(null)
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (event) => {
    const formData = new FormData()
    formData.set("category", category)
    formData.set("title", title)
    formData.set("description", description)
    formData.set("price", price)
    formData.set("location", location)
    formData.set("photo", photo[0])

    event.preventDefault()

    console.log(photo)

    const response = await fetch("http://localhost:3000/post", {
      method: "POST",
      body: formData,
      credentials: "include",
    })

    if (response.ok) {
      setRedirect(true)
    }
  }

  if (redirect) return <Navigate to={"/"} />

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-md  mx-auto my-8 space-y-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Sell your <span className="text-black">Product</span>
        </h1>
        <form className="space-y-2 flex flex-col" onSubmit={handleSubmit}>
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-state"
            >
              Category
            </label>
            <select
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="choose">Choose Category</option>
              <option value="automobile">Automobile</option>
              <option value="properties">Properties</option>
              <option value="mobiles">Mobiles</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="books">Books</option>
              <option value="others">Other Items</option>
            </select>
          </div>

          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter your product title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>
          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              placeholder="Describe your product"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>

          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="Photo"
            >
              Photo of Item
            </label>
            <input
              type="file"
              placeholder="Choose Photo"
              id="Photo"
              required
              onChange={(e) => setPhoto(e.target.files)}
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>

          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>
          <div className="">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default Sell
