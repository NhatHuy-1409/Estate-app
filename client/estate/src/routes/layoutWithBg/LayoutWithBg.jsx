import React from "react"
import "./LayoutWithBg.scss"
function LayoutWithBg({ children }) {
  return (
    <div className="container">
      <div className="content">{children}</div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  )
}

export default LayoutWithBg
