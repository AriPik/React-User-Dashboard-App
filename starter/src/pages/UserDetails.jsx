import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUsers } from '../context/UserContext'

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
        <p>Lat: {geo.lat || 'N/A'}, Lng: {geo.lng || 'N/A'}</p>

      </div>
    </div>
  )
}
