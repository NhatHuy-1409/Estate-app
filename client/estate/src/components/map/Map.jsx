import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "./Map.scss"
import "leaflet/dist/leaflet.css"
import Pin from "../pin/Pin"
function Map({ items }) {
  return (
    <MapContainer
      zoom={13}
      scrollWheelZoom={false}
      className="map"
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [52.4797, -1.90269]
      }
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items?.map((item) => (
        <Pin item={item} />
      ))}
    </MapContainer>
  )
}

export default Map
