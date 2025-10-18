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

  const update = (path, value) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let cur = next
      for (let i = 0; i < keys.length - 1; i++) {
        cur = cur[keys[i]]
      }
      cur[keys[keys.length - 1]] = value
      return next
    })
  }

  const submit = e => {
    e.preventDefault()
    if (!form.name || !form.email) return alert('Name and Email are required')
    onSubmit(form)
    setForm(blank)
  }

  return (
    <form className="user-form" onSubmit={submit}>
      <div className="row">
        <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Full name" />
        <input value={form.email} onChange={e => update('email', e.target.value)} placeholder="Email" />
      </div>
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
