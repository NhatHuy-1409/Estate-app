import React from "react"
import "./SinglePage.scss"
import Slider from "../../components/Slider/Slider"
function SinglePage(item) {
  const { title, address, price } = item
  return (
    <div className="singlePage">
      <div className="detail">
        <Slider />
        <div className="info">
          <div className="top">
            <div className="post">
              <h2 className="title">{title}</h2>
              <div className="flexIcon">
                <img src="./pin.png" alt="" />
                <span>{address}</span>
              </div>
              <h4>$ {price}</h4>
            </div>
            <div className="user">
              <img src="" alt="" />
              <span>Jack</span>
            </div>
          </div>
          <p className="desc">ss</p>
        </div>
      </div>
      <div className="feature"></div>
    </div>
  )
}

export default SinglePage
