"use client";
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

export default function Index() {
  const css = "text-white bg-[#35155D] px-2 py-1 rounded-full duration-300 ease-in-out"
  const [home,setHome] = useState(false);
  const [about,setAbout] = useState(false);
  const [skills,setSkills] = useState(false);
  const [qualification,setQualification] = useState(false);
  const [portfolio,setPortfolio] = useState(false);
  const [contact,setContact] = useState(false)
  const handler =(event)=>{
    switch(event.target.name){
      case "home":
        setHome(true), setAbout(false),setSkills(false),setQualification(false),setPortfolio(false),setContact(false)
        break;
      case "about":
        setHome(false), setAbout(true),setSkills(false),setQualification(false),setPortfolio(false),setContact(false)
        break;
      case "skills":
        setHome(false), setAbout(false),setSkills(true),setQualification(false),setPortfolio(false),setContact(false)
        break;
      case "qualification":
        setHome(false), setAbout(false),setSkills(false),setQualification(true),setPortfolio(false),setContact(false)
        break;  
      case "portfolio":
        setHome(false), setAbout(false),setSkills(false),setQualification(false),setPortfolio(true),setContact(false)
        break;  
      case "contact":
        setHome(false), setAbout(false),setSkills(false),setQualification(false),setPortfolio(false),setContact(true)
        break;  
      default:
        break;  
    }
  }
  return (
    <div>
      <nav className='flex justify-evenly pt-3 items-center'>
        <h1 className='font-bold text-lg px-2 py-1'>Bharath</h1>
        <div className=' text-[1rem] flex gap-5 items-center font-semibold'>
            <Link href="/" onClick={handler} name="home" className={home ? css :'' }>Home</Link>
            <Link href="/about" onClick={handler} name="about" className={about ? css :''}>About</Link>
            <Link href="/skills" onClick={handler} name="skills" className={skills ? css :''}>Skills</Link>
            <Link href="/qualification" onClick={handler} name="qualification" className={qualification ? css :''}>Qualification</Link>
            <Link href="/portfolio" onClick={handler} name="portfolio" className={portfolio ? css :''}>Portfolio</Link>
            <Link href="/contactme" onClick={handler} name="contact" className={contact ? css :''}>ContactMe</Link>
        </div>
      </nav>
    </div>
  )
}
