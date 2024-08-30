import React from "react"
import { listData } from "../../lib/dummydata"
import Card from "../../components/card/Card"
import "./ListPage.scss"
import FilterBlock from "../../components/filterBlock/FilterBlock"
import Map from "../../components/map/Map"

function ListPage() {
  return (
    <div className="listPage">
      <div className="content">
        <FilterBlock />
        <div className="listCard">
          {listData.map((item) => {
            return <Card {...item} />
          })}
        </div>
      </div>
      <div className="mapBlock">
        <Map items={listData} />
      </div>
    </div>
  )
}

export default ListPage
