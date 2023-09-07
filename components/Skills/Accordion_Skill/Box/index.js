import React from 'react'

export default function index({name,nightMode}) {
  return (
    <div className='bg-primary text-white font-bold px-5 rounded-full flex justify-center py-[0.4rem]'>
      {name}
    </div>
  )
}
