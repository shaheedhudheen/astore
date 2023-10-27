import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const { setUser } = useContext(UserContext)

  console.log(email)
  console.log(password)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })

    if (response.ok) {
      const userInfo = await response.json()
      setUser(userInfo)
      setRedirect(true)
    } else {
      alert(await response.json())
    }
  }

  //conditional rendering
  if (redirect) return <Navigate to={"/"} />

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-md  mx-auto my-8 space-y-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Sign <span className="text-black">In</span>
        </h1>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
          />

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          {"Don't"} have an account?
          <Link to="/register">
            <span className="text-blue-700"> Register</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogIn
