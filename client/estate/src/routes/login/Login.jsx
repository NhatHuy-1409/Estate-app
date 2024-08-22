import React from "react"
import LayoutWithBg from "../layoutWithBg/LayoutWithBg"
import { Link } from "react-router-dom"

import "./Login.scss"
function Login() {
  return (
    <LayoutWithBg>
      <div className="login">
        <form action="">
          <h1>Welcome Back</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
    </LayoutWithBg>
  )
}

export default Login
