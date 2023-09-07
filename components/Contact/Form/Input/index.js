import React from 'react'

export default function index({name}) {
  return (
    <div>
      <div>{name}</div>
      <div>
      <input type="text" className=' border-2 border-primary rounded-lg p-1 w-full'/>
      </div>
    </div>
  )
}
