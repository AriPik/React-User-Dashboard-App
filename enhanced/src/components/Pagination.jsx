import React from 'react'
export default function Pagination({ page, setPage, pages }) {
  const prev = () => setPage(p => Math.max(1, p-1))
  const next = () => setPage(p => Math.min(pages, p+1))
  return (
    <div style={{display:'flex', gap:8, justifyContent:'center', marginTop:12}}>
      <button className='btn' onClick={prev} disabled={page===1}>Prev</button>
      <div style={{alignSelf:'center'}}>Page {page} of {pages}</div>
      <button className='btn' onClick={next} disabled={page===pages}>Next</button>
    </div>
  )
}
