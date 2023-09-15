import React, { useEffect, useState } from 'react'

export default function Index({name,handler,err}) {
  let eventHandler = (e)=>{
    handler(e.target.value)
  }
  return (
    <div>
      <div className={err && 'text-red-600'}>{name}</div>
      <div>
      <input type="text" className={` border-2 border-primary rounded-lg p-1 w-full ${err && 'border-red-600 animate-[wiggle_0.2s_2]'}`} onChange={eventHandler}/>
      </div>
    </div>
  )
}
