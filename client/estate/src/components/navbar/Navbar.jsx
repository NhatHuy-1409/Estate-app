import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav>
      <div className="left">
        <Link href="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>Jack</span>
        </Link>
        <Link href="">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Agent</Link>
      </div>
      <div className="right">
        <Link to="/login">Sign in</Link>
        <Link to="/register" className="register">
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
