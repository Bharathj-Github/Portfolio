import React from 'react';
import Image from 'next/image';
import { Paper } from '@mui/material';

export default function index({nightMode,img,name,bio,made,focus}) {
  return (
    <Paper className='bg-white p-6 rounded-3xl flex flex-col gap-1 w-[35vw]' elevation={focus ? 12 : 3}>
      <Image src={img} alt={img} className='w-[35vw]'></Image>
      <div className='font-bold text-xl text-primary max-sm:text-xs'>{name}</div>
      <p className={`${focus ? 'text-sm' : 'text-xs'} max-sm:hidden`}>{bio}</p>
        <p className={`${focus ? 'text-sm' : 'text-xs'} font-bold max-sm:text-xs`}>Built Using :&nbsp;</p>
      <div className='grid items-center gap-2 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-1'>
        {made.map((data)=>{ return <div key={Math.random()} className='bg-primary px-3 py-1 font-bold rounded-full text-white text-xs 
        flex justify-center max-sm:text-[0.5rem] max-sm:py-0'>{data}</div>})}
      </div>

      <button className={`bg-gray-200 text-primary font-bold  px-10 py-1 rounded-full mt-3 ${focus ? '':'hidden'} max-sm:text-xs max-sm:px-0`}>Open</button>

    </Paper>
  )
}
