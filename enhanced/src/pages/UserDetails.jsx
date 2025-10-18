import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUsers } from '../context/UserContext'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function UserDetails() {
  const { id } = useParams()
  const { getUserById } = useUsers()
  const user = getUserById(id)

  if (!user) {
    return (
      <div className="page details">
        <p>User not found.</p>
        <Link to="/" className="btn">Back</Link>
      </div>
    )
  }

  const { name, email, phone, website, company = {}, address = {} } = user
  const { street, suite, city, zipcode, geo = {} } = address
  const lat = parseFloat(geo.lat) || 0
  const lng = parseFloat(geo.lng) || 0

  return (
    <div className="page details">
      <Link to="/" className="btn">← Back to Dashboard</Link>

      <div className="details-card">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>

        <h3>Address</h3>
        <p>{street || ''} {suite || ''}</p>
        <p>{city || ''} {zipcode || ''}</p>

        <h3>Geo-location</h3>
        {lat !== 0 && lng !== 0 ? (
          <div style={{height:300}}>
            <MapContainer center={[lat,lng]} zoom={13} style={{height:'100%', width:'100%'}}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[lat,lng]}>
                <Popup>{name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        ) : <p>Geo: N/A</p>}
      </div>
    </div>
  )
}
