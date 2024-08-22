import React from "react"
import "./SearchBar.scss"

const types = ["buy", "rent"]

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button key={type}>{type}</button>
        ))}
      </div>
      <form action="">
        <input type="text" name="city" placeholder="City" />
        <input type="number" name="minPrice" placeholder="Min Price" />
        <input type="number" name="maxPrice" placeholder="Max Price" />
        <a href="" className="searchBtn">
          <button>
            <img src="./search.png" alt="" />
          </button>
        </a>
      </form>
    </div>
  )
}

export default SearchBar
