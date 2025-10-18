import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="brand">User Dashboard</Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </main>

      <footer className="app-footer">Built with React • Demo assignment</footer>
    </div>
  )
}
