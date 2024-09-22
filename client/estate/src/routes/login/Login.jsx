import React, { useContext, useState } from "react"
import LayoutWithBg from "../layoutWithBg/LayoutWithBg"
import { Link, useNavigate } from "react-router-dom"

import "./Login.scss"
import apiRequest from "../../lib/apiRequest"
import { AuthContext } from "../../context/AuthContext"
function Login() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const {updateUser} = useContext(AuthContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const formData = new FormData(e.target)

    const username = formData.get("username")
    const password = formData.get("password")

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      })
      updateUser(res.data)
      navigate("/")
      console.log(res.data)
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LayoutWithBg>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
    </LayoutWithBg>
  )
}

export default Login
