import { useState } from "react"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./routes/layout/Layout"
import HomePage from "./routes/homePage/HomePage"
import Login from "./routes/login/Login"
import Register from "./routes/register/Register"
import ListPage from "./routes/listPage/ListPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
