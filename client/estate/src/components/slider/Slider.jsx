import React, { useState } from "react"
import "./Slider.scss"

const dataImages = [
  "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]
function Slider() {
  const [imageIndex, setImageIndex] = useState(null)

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(dataImages.length - 1)
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === dataImages.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }
  }

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div
            className="arrow"
            onClick={() => {
              changeSlide("left")
            }}
          >
            <img src="./arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={dataImages[imageIndex]} alt="" />
          </div>
          <div className="arrow right">
            <img
              src="./arrow.png"
              alt=""
              onClick={() => {
                changeSlide("right")
              }}
            />
          </div>
          <div
            className="close"
            onClick={() => {
              setImageIndex(null)
            }}
          >
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={dataImages[0]}
          alt=""
          onClick={() => {
            setImageIndex(0)
          }}
        />
      </div>
      <div className="smallImages">
        {dataImages.slice(1).map((item, i) => (
          <img
            src={item}
            onClick={() => {
              setImageIndex(i + 1)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
