import { useState } from "react"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./routes/layout/Layout"
import HomePage from "./routes/homePage/HomePage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/kk",
          element: <HomePage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
