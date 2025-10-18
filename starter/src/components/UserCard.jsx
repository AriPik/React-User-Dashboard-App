import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <Link to={`/user/${user.id}`} className="user-card">
      <h4 className="user-name">{user.name}</h4>
      <p className="muted">{user.email}</p>
      <p className="muted">{user.phone}</p>
      <p className="company">{user.company?.name}</p>
    </Link>
  )
}
