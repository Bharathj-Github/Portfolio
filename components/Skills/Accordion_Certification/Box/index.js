import React from 'react'
import Image from 'next/image';
import badge from "../../../img/badge.svg";
import Paper from "@mui/material/Paper"

export default function index({name,nightMode}) {
  return (
    <Paper className='bg-white text-black px-5 rounded-full flex items-center gap-2 py-[0.4rem] max-sm:text-xs' elevation={3}>
      <Image src={badge} alt='badge' width={30}></Image>{name}
    </Paper>
  )
}
