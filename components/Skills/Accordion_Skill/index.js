import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from './Box';
import key from "../../img/key.svg"
import front_end from "../../img/front_end.svg"
import back_end from "../../img/back_end.svg"
import Image from 'next/image';

export default function BasicAccordion({nightMode}) {
  return (
    <div className='flex flex-col gap-2 pt-10 lg:gap-4'>
      <Accordion sx={{borderRadius:4}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{borderRadius:4, backgroundColor:"#5f22d9", fontWeight:'bold',color:'white'}}
          >
         <div className='flex items-center gap-5 max-sm:gap-3 text-[1.1rem] max-sm:text-sm mx-10 max-sm:mx-5'><Image src={key} alt='key' width={50} className='max-sm:w-10'/> KEY DOMAIN </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col gap-2 py-2'>
            <div className='flex'><p>Domain :&nbsp;</p><p className='text-primary font-extrabold'>MAINFRAME</p></div>
            <p>Technical :&nbsp;</p>
            <div className='flex gap-4 max-sm:grid max-sm:grid-cols-3'>
                <Box name={'Z-OS'}/>
                <Box name={'JCL'}/>
                <Box name={'COBOL'}/>
                <div className='col-span-2'>
                <Box name={'COBOL-DB2'}/>
                </div>
                <Box name={'CICS'}/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{borderRadius:4}}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{borderRadius:4, backgroundColor:"#5f22d9", fontWeight:'bold',color:'white'}}
        >
          <div className='flex items-center gap-5 max-sm:gap-3 text-[1.1rem] max-sm:text-sm mx-10 max-sm:mx-5'><Image src={front_end} alt='front_end' width={50} className='max-sm:w-10'/>FRONT-END TECHNOLOGIES</div>
        </AccordionSummary>

        <AccordionDetails>
          <div className='flex flex-col gap-2 py-2'>
            <p>Skills :&nbsp;</p>
            <div className='flex gap-4 max-sm:grid max-sm:grid-cols-2'>
            <Box name={'React JS'} nightMode={nightMode}/>
            <Box name={'Next JS'} nightMode={nightMode}/>
            <Box name={'Redux'} nightMode={nightMode}/>
            <Box name={'Tailwind CSS'} nightMode={nightMode}/>
            <Box name={'Material UI'} nightMode={nightMode}/>
            <Box name={'Bootstrap'} nightMode={nightMode}/>
            <Box name={'HTML'} nightMode={nightMode}/>
            <Box name={'CSS'} nightMode={nightMode}/>
            <Box name={'Java Script'} nightMode={nightMode}/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{borderRadius:4}}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white'}} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{borderRadius:4, backgroundColor:"#5f22d9", fontWeight:'bold',color:'white'}}
        >
          <div className='flex items-center gap-5 max-sm:gap-3 text-[1.1rem] max-sm:text-sm mx-10 max-sm:mx-5'><Image src={back_end} alt='back_end' width={50} className='max-sm:w-10'/>BACK-END TECHNOLOGIES</div>
        </AccordionSummary>

        <AccordionDetails>
          <div className='flex flex-col gap-2 py-2'>
            <p>Skills :&nbsp;</p>
            <div className='flex gap-4 max-sm:grid max-sm:grid-cols-2'>
            <Box name={'Node JS'} nightMode={nightMode}/>
            <Box name={'Express'} nightMode={nightMode}/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
