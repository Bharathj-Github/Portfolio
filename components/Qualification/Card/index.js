import React from 'react';
import Image from 'next/image';
import logo from '../../img/logo.svg'
import logo_l from '../../img/logo_l.svg'

export default function index({name,university,institute,pass,branch,nightMode}) {
  return (
    <div className={`${nightMode ? 'bg-gray-200 text-black' : 'bg-primary text-white' } rounded-3xl shadow-lg`}>
      <div className={`font-bold text-xl p-5 ${nightMode ? 'bg-primary text-white' : 'bg-gray-200 text-black' } 
      rounded-t-3xl uppercase border-b-4  border-white`}>
        <div className='flex items-center gap-3 max-sm:text-'><Image src={nightMode ? logo : logo_l} alt='logo' width={40}/>{name}</div>
        </div>
        <div className='max-sm:text-sm px-5 pb-5 pt-4 grid grid-cols-2 gap-5 max-sm:grid-cols-1'>
      <div><p className='font-bold text-lg uppercase max-sm:text-xs'>Institute Name</p><p>{institute}</p></div>
      <div><p className='font-bold text-lg uppercase max-sm:text-xs'>University</p><p>{university}</p></div>
      <div><p className='font-bold text-lg uppercase max-sm:text-xs'>Year of Passing</p><p>{pass}</p></div>
      <div><p className='font-bold text-lg uppercase max-sm:text-xs'>Branch</p><p>{branch}</p></div>
        </div>
    </div>
  )
}
