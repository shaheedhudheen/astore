import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"

const Home = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/post")

      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  //get posts from server
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-y-4 gap-x-4">
      {posts.map((post) => (
        <PostCard {...post} key={post._id} />
      ))}
    </div>
  )
}

export default Home
