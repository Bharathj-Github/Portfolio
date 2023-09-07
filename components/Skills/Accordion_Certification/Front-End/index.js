import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import certification from "../../../img/certification.svg"
import Box from '../Box';

export default function BasicAccordion({nightMode}) {
  return (
    <div className=''>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={`${nightMode ? 'bg-primary' : 'bg-primary'} text-white font-bold max-sm:text-sm `}
        >
          <div className='flex items-center gap-5 text-xl max-sm:gap-3 max-sm:text-sm'><Image src={certification} alt='certification' width={60} className='w-10'/>FRONT-END TECHNOLOGIES</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col gap-2 py-2'>
            <div className='flex flex-col gap-4'>
            <Box name={'Infosys Certified React Professional'} nightMode={nightMode}/>
            <Box name={'Course Certification On React JS'} nightMode={nightMode}/>
            <Box name={'Course Certification On Three.JS: JavaScript 3D Library'} nightMode={nightMode}/>
            <Box name={'Course Certification On HTML 5'} nightMode={nightMode}/>
            <Box name={'Course Certification On HTML 5 - The Language'} nightMode={nightMode}/>
            <Box name={'Course Certification On Cascading Style Sheets - CSS3'} nightMode={nightMode}/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
