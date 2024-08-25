import React from "react"
import LayoutWithBg from "../layoutWithBg/LayoutWithBg"
import { Link } from "react-router-dom"
import axios from "axios";

import "./Login.scss"
function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register",{username,email,password})

      console.log(res.data);
      
    } catch (error) {
      console.log(error);
      
    }
  
  }


  return (
    <LayoutWithBg>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button>Register</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
    </LayoutWithBg>
  )
}

export default Register
