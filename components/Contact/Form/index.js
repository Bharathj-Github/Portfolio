import React from 'react'
import Input from './Input';
import Image from 'next/image';
import send from "../../img/send_2.svg";
import { Paper } from '@mui/material';

export default function index() {
    const handler = (event)=>{
        event.preventDefault();
    }
  return (
    <Paper className='bg-gray-100 p-10 rounded-2xl' elevation={4}>
    <div className='font-extrabold text-primary text-3xl pb-4'>Send Me A Message</div>
        <form action="" className='flex flex-col gap-3'>
            <div className='md:flex gap-4'>
            <Input name={'First Name *'}/>      
            <Input name={'Last Name *'}/>      
            </div>
            <Input name={'Email Id *'}/>
            <div>
            <div>Message *</div>
            <textarea name="message" className='border-2 border-primary rounded-t-2xl rounded-l-2xl w-full max-sm:h-[7rem]'></textarea>
            </div>
            <button onClick={handler} type='submit' className='flex bg-primary rounded-2xl text-white font-bold w-full justify-center 
            py-2 mt-2 gap-3 items-center text-lg'>Send <Image src={send} alt="send" className='max-sm:w-10 w-[2.5rem]'/></button>      
        </form>
    </Paper>
  )
}
