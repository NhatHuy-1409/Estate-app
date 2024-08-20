import React from "react"

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
      </form>
    </div>
  )
}

export default SearchBar
