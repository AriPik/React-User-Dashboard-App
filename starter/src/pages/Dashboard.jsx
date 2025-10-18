import React, { useMemo, useState } from 'react'
import { useUsers } from '../context/UserContext'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import UserForm from '../components/UserForm'

export default function Dashboard() {
  const { users, loading, error, addUser } = useUsers()
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter(u => u.name.toLowerCase().includes(q))
  }, [users, query])

  return (
    <div className="page dashboard">
      <div className="controls">
        <SearchBar value={query} onChange={setQuery} placeholder="Search by name..." />
        <button className="btn primary" onClick={() => setShowForm(s => !s)}>
          {showForm ? 'Close' : 'Create New User'}
        </button>
      </div>

      {showForm && (
        <div className="form-wrap">
          <UserForm onSubmit={data => { addUser(data); setShowForm(false) }} />
        </div>
      )}

      {loading && <p>Loading users...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="grid users-grid">
        {filtered.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
        {(!loading && filtered.length === 0) && <p>No users match "{query}"</p>}
      </div>
    </div>
  )
}
