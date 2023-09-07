import React,{useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import more from "../img/menu.svg"
import home from "../img/home.svg"
import about from "../img/about.svg"
import skills from "../img/skill.svg"
import qualification from "../img/hat.svg"
import portfolio from "../img/port.svg"
import contact from "../img/contact.svg"

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const [active, setActive] = useState("home");
  const handler = (event) => {
    setActive(event.target.innerHTML);
    console.log(event.target.innerHTML)
    scrollTo({
      behavior: "smooth",
      top: document.getElementById(event.target.innerHTML)
        .offsetTop,
    });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['home', 'about', 'skills', 'qualification','portfolio','contact'].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton sx={{backgroundColor:'#5f22d9',borderRadius:10,color:'white',fontFamily:'Poppins'}} >
              <ListItemIcon>
                {text =="home" && <Image src={home} alt={text} width={35} height={30}></Image>}
                {text == "about" && <Image src={about} alt={text} width={35} height={30}></Image>}
                {text == "skills" && <Image src={skills} alt={text} width={35} height={30}></Image>}
                {text == "qualification" && <Image src={qualification} alt={text} width={35} height={30}></Image>}
                {text == "portfolio" && <Image src={portfolio} alt={text} width={35} height={30}></Image>}
                {text == "contact" && <Image src={contact} alt={text} width={35} height={30}></Image>}
              </ListItemIcon>
              <ListItemText primary={text} className='capitalize' onClick={handler} name={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>

        <React.Fragment>
          <Button onClick={toggleDrawer('bottom', true)}><Image src={more} alt={'more'} width={35}/></Button>
          <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
          >
            {list('bottom')}
          </SwipeableDrawer>
        </React.Fragment>

    </div>
  );
}