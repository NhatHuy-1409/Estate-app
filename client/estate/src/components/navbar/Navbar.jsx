import React, { useContext } from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
function Navbar() {
  const { currentUser } = useContext(AuthContext)
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
        {currentUser ? (
          <div className="user">
          <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
          <span>{currentUser.username}</span>
          <Link to="/profile" className="profile">
            {/* {number > 0 && <div className="notification">{number}</div>} */}
            <span>Profile</span>
          </Link>
        </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
