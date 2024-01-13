import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppBar, Box, Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { deepOrange } from '@mui/material/colors';

const NameTab = styled(Tab)({
    color: 'black',
    fontWeight: 'bold',
    '&:hover':{
        color:'purple'
    }
});

const ItemTab =styled(Tab)({
    '&:hover':{
        color: 'purple'
    },
    fontWeight: 'bold'
});

export const Navigation =()=>{
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <>
        <AppBar style={{backgroundColor:'white', height: '80px'}}>
        <Tabs style={{marginTop:'10px', padding: 0, display:'flex', alignContent: 'center', justifyContent:"center",}}>
            <Avatar sx={{bgcolor:deepOrange[500]}}>SB</Avatar>
            <NameTab label="Subin Bista"></NameTab>
            <Box sx={{ flexGrow: 1 }} />
            <ItemTab label="Home" component={NavLink} to="/" onClick={scrollToTop}></ItemTab>
            <ItemTab label="Contact" component={NavLink} to="/contact" onClick={scrollToTop}></ItemTab>
            <ItemTab label="Projects" component={NavLink} to="/projects" onClick={scrollToTop}></ItemTab>
            <ItemTab label="About Me" component={NavLink} to="/about" onClick={scrollToTop}></ItemTab>
        </Tabs>
        </AppBar>
        </>
    )
}
