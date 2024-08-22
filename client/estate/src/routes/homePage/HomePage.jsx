import React from "react"
import SearchBar from "../../components/searchBar/SearchBar"
import "./HomePage.scss"
import LayoutWithBg from "../layoutWithBg/LayoutWithBg"

function HomePage() {
  return (
    <LayoutWithBg>
      <div className="textContainer">
        <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
          suscipit cum eius, iure est nulla animi consequatur facilis id
          pariatur fugit quos laudantium temporibus dolor ea repellat provident
          impedit!
        </p>
        <SearchBar />
        <div className="statisticContainer">
          <div className="statisticItem">
            <h1>16+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="statisticItem">
            <h1>200</h1>
            <h2>Award Gained</h2>
          </div>
          <div className="statisticItem">
            <h1>2000+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
      </div>
    </LayoutWithBg>
  )
}

export default HomePage
