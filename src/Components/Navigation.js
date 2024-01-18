import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppBar, Box, Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { animateScroll as scroll } from 'react-scroll';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-scroll';

const NameTab = styled(Tab)({
  color: 'black',
  fontWeight: 'bold',
 
  '&:hover': {
    color: 'purple'
  }
});

const ItemTab = styled(Tab)({
  '&:hover': {
    color: 'purple'
  },
  fontWeight: 'bold'
});

export const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <AppBar style={{ backgroundColor: 'white', height: '80px' }}>
        <Tabs style={{ marginTop: '10px', padding: 0, display: 'flex', alignContent: 'center', justifyContent: "center", }}>
          <Avatar sx={{ bgcolor: deepOrange[500] }} style={{ marginLeft:'5px'}}>SB</Avatar>
          <NameTab label="Subin Bista" onClick={scrollToTop}></NameTab>
          <Box sx={{ flexGrow: 1 }} />
          <Link to="home" spy={true} smooth={true} offset={30} duration={500}  style={{color:'black'}}><ItemTab label="Home" /></Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500} style={{color:'black'}}><ItemTab label="Contact" /></Link>
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} style={{color:'black'}}><ItemTab label="Projects" /></Link>
          <Link to="about" spy={true} smooth={true} offset={-110} duration={500} style={{color:'black'}}><ItemTab label="About Me" /></Link>
        </Tabs>
      </AppBar>
    </>
  )
}
