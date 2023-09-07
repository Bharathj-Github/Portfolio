import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import certification from "../../../img/certification.svg"
import Box from '../Box';

export default function index({nightMode}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{background:"#5f22d9",color:'white',fontWeight:'bold'}}
        >
          <div className='flex items-center gap-5 text-xl max-sm:gap-3 max-sm:text-sm'><Image src={certification} alt='certification' width={60} className='w-10'/>BACK-END TECHNOLOGIES</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col'>
            <div className='flex gap-5 flex-col py-2'>
            <Box name={'Course Certification On Node.JS'} nightMode={nightMode}/>
            <Box name={'Course Certification On Express.JS'} nightMode={nightMode}/>
            <Box name={'Course Certification On MongoDB Developer'} nightMode={nightMode}/>
            <Box name={'Course Certification On API Development using Node And Express'} nightMode={nightMode}/>
            <Box name={'Course Certification On Rest API Development with Node and Express'} nightMode={nightMode}/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
