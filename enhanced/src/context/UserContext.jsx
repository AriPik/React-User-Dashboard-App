import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const UserContext = createContext()
export const useUsers = () => useContext(UserContext)

export function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (mounted) {
          setUsers(res.data)
          setLoading(false)
        }
      })
      .catch(err => {
        if (mounted) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => { mounted = false }
  }, [])

  const addUser = user => {
    const id = Date.now().toString()
    setUsers(prev => [{ ...user, id }, ...prev])
  }

  const getUserById = id => users.find(u => String(u.id) === String(id))

  return (
    <UserContext.Provider value={{ users, loading, error, addUser, getUserById }}>
      {children}
    </UserContext.Provider>
  )
}
