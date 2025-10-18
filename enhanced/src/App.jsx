import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'

export default function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="brand">User Dashboard — Enhanced</Link>
        <div style={{marginLeft:'auto'}}>
          <button className='btn' onClick={() => setDark(d => !d)}>{dark ? 'Light' : 'Dark'}</button>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </main>

      <footer className="app-footer">Enhanced: validation, pagination, dark mode, map</footer>
    </div>
  )
}
