import React from "react"
import LayoutWithBg from "../layoutWithBg/LayoutWithBg"
import { Link } from "react-router-dom"

import "./Login.scss"
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const userName = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")
    console.log({ userName })
  }

  return (
    <LayoutWithBg>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
    </LayoutWithBg>
  )
}

export default Register
