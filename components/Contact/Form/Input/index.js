import React, { useEffect, useState } from 'react'

export default function Index({name,handler}) {
  let eventHandler = (e)=>{
    handler(e.target.value)
  }
  return (
    <div>
      <div>{name}</div>
      <div>
      <input type="text" className=' border-2 border-primary rounded-lg p-1 w-full' onChange={eventHandler}/>
      </div>
    </div>
  )
}
