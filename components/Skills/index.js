import React from 'react';
import Accordion_Skill from './Accordion_Skill';
import Accordion_Certification_F from './Accordion_Certification/Front-End';
import Accordion_Certification_B from './Accordion_Certification/Back-End';

export default function index({nightMode}) {
  return (
    <div>
      <div className={`pt-[5rem] flex flex-col items-center ${nightMode && 'bg-secondary'} sm:h-full max-sm:h-[100%] max-sm:pt-10`} id="skills">
        <p className="text-4xl font-bold">Skills</p>
        <p>My technical level</p>
        <div className='w-full'>
          <Accordion_Skill nightMode={nightMode}/>
        </div>
        <p className="text-4xl font-bold pt-10 ">Certifications</p>
        <p>My Certifications at INFOSYS</p>
        <div className='grid grid-cols-2 pt-10 max-sm:grid-cols-1 gap-2 mx-[10%]'>
        <Accordion_Certification_F nightMode={nightMode}/>
        <Accordion_Certification_B nightMode={nightMode}/>
        </div>
      </div>
    </div>
  )
}
