import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ lat, lng }) {
  if (!lat || !lng) return <p>Location not available.</p>;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={12}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>User Location</Popup>
      </Marker>
    </MapContainer>
  );
}