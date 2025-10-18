import React, { useState } from 'react'

const blank = {
  name: '',
  email: '',
  phone: '',
  company: { name: '' },
  address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } },
  website: ''
}

export default function UserForm({ onSubmit }) {
  const [form, setForm] = useState(blank)
  const [errors, setErrors] = useState({})

  const update = (path, value) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let cur = next
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]]
      cur[keys[keys.length - 1]] = value
      return next
    })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required'
    if (form.address.geo.lat && isNaN(Number(form.address.geo.lat))) e.lat = 'Lat must be a number'
    if (form.address.geo.lng && isNaN(Number(form.address.geo.lng))) e.lng = 'Lng must be a number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = e => {
    e.preventDefault()
    if (!validate()) return
    onSubmit(form)
    setForm(blank)
    setErrors({})
  }

  return (
    <form className="user-form" onSubmit={submit} noValidate>
      <div className="row">
        <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Full name" />
        <input value={form.email} onChange={e => update('email', e.target.value)} placeholder="Email" />
      </div>
      {errors.name && <div style={{color:'red'}}>{errors.name}</div>}
      {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
      <div className="row">
        <input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="Phone" />
        <input value={form.company.name} onChange={e => update('company.name', e.target.value)} placeholder="Company" />
      </div>
      <div className="row">
        <input value={form.address.city} onChange={e => update('address.city', e.target.value)} placeholder="City" />
        <input value={form.address.zipcode} onChange={e => update('address.zipcode', e.target.value)} placeholder="Zipcode" />
      </div>
      <div className="row">
        <input value={form.address.geo.lat} onChange={e => update('address.geo.lat', e.target.value)} placeholder="Latitude" />
        <input value={form.address.geo.lng} onChange={e => update('address.geo.lng', e.target.value)} placeholder="Longitude" />
      </div>
      <div className="actions">
        <button type="submit" className="btn primary">Add User</button>
      </div>
    </form>
  )
}
