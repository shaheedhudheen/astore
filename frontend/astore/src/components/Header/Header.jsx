import Button from "../Button"
import { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import UserContext from "../../contexts/UserContext"

const Header = () => {
  const { user, setUser } = useContext(UserContext)
  const { pathname } = useLocation()

  useEffect(() => {
    fetch("http://localhost:3000/user", {
      credentials: "include",
    }).then((res) => {
      res.json().then((info) => {
        setUser(info)
      })
    })
  }, [])

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
    })
    setUser(null)
  }

  return (
    <div className=" flex justify-around items-center py-2 shadow sticky z-50 top-0">
      <Link to="/">
        <h1 className="text-2xl font-bold">AStore</h1>
      </Link>
      <div>
        {pathname === "/" ? (
          <div className="space-x-2">
            <input
              type="text"
              placeholder="search Here"
              className="px-5 py-2.5 rounded-lg font-medium text-sm border border-gray-300"
            />

            <button className="px-5 py-2.5 bg-blue-600 font-medium text-sm text-white rounded-lg">
              Search
            </button>
          </div>
        ) : null}
      </div>
      <div className="space-x-2 flex">
        {user?.username ? (
          <div className="flex items-center space-x-2">
            <p className="font-medium text-lg">{user?.username}</p>
            <Button
              name="Log Out"
              style="bg-blue-700 hover:bg-blue-800"
              handleClick={handleLogout}
            />
            {pathname === "/post" ? null : (
              <Link to="/post">
                <Button name="SELL" style="bg-red-700 hover:bg-red-800" />
              </Link>
            )}
          </div>
        ) : pathname === "/" ? (
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button name="Log in" style="bg-blue-700 hover:bg-blue-800" />
            </Link>
            <Link to="/register">
              <Button name="Register" style="bg-blue-700 hover:bg-blue-800" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header
