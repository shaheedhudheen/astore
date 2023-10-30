import { Link } from "react-router-dom"

const PostCard = ({ image, title, price, description, location, _id }) => {
  return (
    <Link
      to={`/post/${_id}`}
      className="w-72 min-h-[350px] p-1 rounded-md m-2 border border-gray-300"
    >
      <img
        src={"http://localhost:3000/" + image}
        alt=""
        className="rounded-md w-full max-h-[175px] object-cover"
      />
      <div className="my-2 space-y-2 ">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <h4 className="text-lg font-semibold text-gray-800">${price}</h4>
        <h5 className="font-medium text-gray-700">{description}</h5>
        <p className="font-medium text-gray-500">{location}</p>
      </div>
    </Link>
  )
}

export default PostCard
