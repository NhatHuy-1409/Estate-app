import React from "react"
import "./Card.scss"
function Card({ img, title, address, price, bedroom, bathroom }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="address flexIcon">
          <img className="icon" src="./pin.png" alt="" />
          <span>{address}</span>
        </div>
        <div className="price">
          <span>$</span>
          <span>{price}</span>
        </div>
        <div className="bottom">
          <div className="features">
            <div className="feature flexIcon">
              <img className="icon" src="./bed.png" alt="" />
              <span>{bedroom} bedroom</span>
            </div>
            <div className="feature flexIcon">
              <img className="icon" src="./bath.png" alt="" />
              <span>{bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <img className="icon" src="./save.png" alt="" />
            <img className="icon" src="./chat.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
