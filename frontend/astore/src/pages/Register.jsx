import { useState } from "react"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleRegister = async (event) => {
    event.preventDefault()

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })

    if (response.ok) {
      setRedirect(true)
    } else {
      alert(await response.json())
    }
  }

  if (redirect) {
    alert("Registration successfull, Plase login ")
    return <Navigate to={"/login"} />
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-md  mx-auto my-8 space-y-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Register
        </h1>

        <form className="space-y-2" onSubmit={handleRegister}>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" rounded py-3 px-4 focus:outline-none border border-gray-200 focus:border-gray-500 w-full"
            onChange={(e) => setEmail(e.target.value)}
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
            Register
          </button>
        </form>
        <p>
          Already have an account?
          <Link to="/login">
            <span className="text-blue-700"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
