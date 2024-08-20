import React from "react"
import "./Navbar.scss"
function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>Jack</span>
        </a>
        <a href="">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div className="right">
        <a href="/login">Sign in</a>
        <a href="/register" className="register">
          Sign up
        </a>
      </div>
    </nav>
  )
}

export default Navbar
