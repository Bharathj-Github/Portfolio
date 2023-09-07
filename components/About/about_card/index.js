import React from 'react'
import Image from 'next/image';


export default function index(props) {
  return (
    <div className={`${props.nightMode ? 'bg-gray-100':'bg-primary'} p-5 ${props.nightMode ? 'text-black' : 'text-white'}  rounded-2xl`}>
      <h3 className='flex gap-5 text-lg font-bold'><Image src={props.nightMode ? props.img[0] : props.img[1]} alt={props.img} width={25}/>{props.heading}</h3>
      <p className={`text-sm pt-4 lg:text-base`}>{props.content}</p>
    </div>
  )
}
