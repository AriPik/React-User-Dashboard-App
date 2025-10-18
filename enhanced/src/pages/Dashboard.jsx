import React, { useMemo, useState } from 'react'
import { useUsers } from '../context/UserContext'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import UserForm from '../components/UserForm'
import Pagination from '../components/Pagination'
import UserDetails from '../components/UserDetails'

export default function Dashboard() {
  const { users, loading, error, addUser } = useUsers()
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState(null)
  const pageSize = 6

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter(u => u.name.toLowerCase().includes(q))
  }, [users, query])

  const total = filtered.length
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const current = filtered.slice((page - 1) * pageSize, page * pageSize)

  if (selectedUser) {
    return <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)} />
  }

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
        {current.map(user => (
          <UserCard key={user.id} user={user} onSelect={setSelectedUser} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} pages={pages} />
    </div>
  )
}