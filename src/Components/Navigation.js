import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AppBar, Box, Avatar, IconButton, MenuList, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { animateScroll as scroll } from "react-scroll";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';

const NameTab = styled(Tab)({
  color: "black",
  fontWeight: "bold",

  "&:hover": {
    color: "purple",
  },
});

const ItemTab = styled(Tab)({
  "&:hover": {
    color: "purple",
  },
  fontWeight: "bold",
});

export const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const[open, setOpen] = useState(false);
  const[anchorEl, setAnchorEl]= useState(null);

  const handleClick =(event)=>{
    setOpen(true);
    setAnchorEl(event.currentTarget)
  }
  const handleClose=()=>{
    setOpen(false);
    setAnchorEl(null);
  }
  return (
    <>
    <Box sx={{ maxWidth: '100vw' }}>
      <AppBar style={{ backgroundColor: "white", height: "80px" }}>
        <Tabs
          style={{
            marginTop: "10px",
            padding: 0,
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              display: { xs: "none", md: "flex" },
            }}
            style={{ marginLeft: "5px" }}
          >
            SB
          </Avatar>
          <NameTab
            label="Subin Bista"
            onClick={scrollToTop}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></NameTab>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            style={{ color: "black" }}
          >
            <ItemTab
              label="Home"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ color: "black" }}
          >
            <ItemTab
              label="Contact"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ color: "black" }}
          >
            <ItemTab
              label="Projects"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            style={{ color: "black" }}
          >
            <ItemTab
              label="About Me"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                width: "24",
                height: "24",
                marginLeft: "10px",
              }}
            >
              SB
            </Avatar>
            
            
            <IconButton onClick={handleClick}>
  <MenuIcon style={{fontSize:'2.3rem', marginLeft:'300px', marginBottom:'20px',color:'black'}} />
</IconButton>
<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
  <MenuList sx={{width:'100vw'}}>
    <Link to="home" spy={true} smooth={true} offset={30} duration={500}>
      <MenuItem onClick={handleClose}>Home</MenuItem>
    </Link>
    <Link to="about" spy={true} smooth={true} offset={-110} duration={500}>
      <MenuItem onClick={handleClose}>About</MenuItem>
    </Link>
    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
      <MenuItem onClick={handleClose}>Projects</MenuItem>
    </Link>
    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
      <MenuItem onClick={handleClose}>Contact</MenuItem>
    </Link>
  </MenuList>
</Menu>


          </Box>
        </Tabs>
      </AppBar>
      </Box>
    </>
  );
};
