import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Post from "./pages/Post"
import UserContextProvider from "./contexts/UserContextProvider"
import Sell from "./pages/Sell"
import Edit from "./pages/Edit"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "post",
        element: <Sell />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
)
