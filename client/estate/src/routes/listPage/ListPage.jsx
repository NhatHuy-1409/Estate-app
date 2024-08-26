import React from "react"
import { listData } from "../../lib/dummydata"
import Card from "../../components/card/Card"
import "./ListPage.scss"

function ListPage() {
  return (
    <div className="listPage">
      <div className="content">
        <div className="filterBlock"></div>
        <div className="listCard">
          {listData.map((item) => {
            return <Card {...item} />
          })}
        </div>
      </div>
      <div className="map"></div>
    </div>
  )
}

export default ListPage
