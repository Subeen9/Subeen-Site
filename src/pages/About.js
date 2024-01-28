import React from "react";
import { Button, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCss3Alt, faGit, faGithub, faHtml5, faJava, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import FirebaseIcon from '../assests/firebase (2).png'
import { scroller } from "react-scroll";
import { useTheme } from "@emotion/react";
const Customdivider = styled(Divider)({
  width: "4%",
  margin: "auto",
  fontWeight: "bolder",
  borderBottomColor: "#191970",
  borderBottomWidth: "5px",
});
const StyledButton =styled(Button)({
    fontSize: "0.8rem",
    padding: "10px 10px",
    backgroundColor: "#191970",
    border: "2px solid #191970",
    color:'white',
    marginLeft:'10px',
    '&:hover':{
        fontWeight:'bolder',
        backgroundColor:'#191970'
    }
})
const handleClick =()=>{
  scroller.scrollTo('contact',
  {duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset:50,})
}

export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(('sm')))
  return (
    <>
    <div id="about">
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <Customdivider />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography style={{fontWeight:'bold', marginLeft:'10px'}}> Yours Truely,</Typography>
          <br/>
          <Typography style={{marginLeft:'10px',}}>
            I’m Subin Bista, a Computer Science student at Southeastern
            Louisiana University with a 4.0 GPA. I’ve worked as a Research
            Assistant, building a student portal using React JS and Firebase.
            I’ve also led a project to develop ‘Selu Thrift Store’, an
            ecommerce site, using ASP.NET Core, React, and TypeScript.
             I’ve participated in leadership bootcamps and look forward to
            contributing more to the field of Computer Science.
          </Typography>
          <br/>
          <Typography style={{marginLeft:'10px'}}>
          I am open to job opportunities and internships that will allow me to grow and learn more.
           Please don’t hesitate to contact me if you believe my skills could be valuable to your team.
           <br/>
           <br/>
           <StyledButton onClick={handleClick}>Contact</StyledButton>
          </Typography>
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h5" style={{textAlign: 'center', fontWeight:'bold'}}>Skills</Typography>
        <Grid item xs={12} sm={12} >
        <FontAwesomeIcon icon={faJs} style={{marginLeft:isMobile? '10px':'150px', fontSize:isMobile?'55px':'60px', marginTop:'50px'}} />
        <FontAwesomeIcon icon={faReact} style={{marginLeft:isMobile? '50px':'90px',fontSize:isMobile?'55px':'60px'}} />
        <FontAwesomeIcon icon={faHtml5} style={{marginLeft:isMobile? '50px':'90px', fontSize:isMobile?'55px':'60px'}} />
        <FontAwesomeIcon icon={faCss3Alt} style={{marginLeft:isMobile? '50px':'90px', fontSize:isMobile?'55px':'60px'}} />
        </Grid>
        <Grid item xs={12}sm={12}>
        <FontAwesomeIcon icon={faGit} style={{marginLeft:isMobile? '10px':'150px', fontSize:'60px', marginTop:'50px'}} />
        <FontAwesomeIcon icon={faGithub} style={{marginLeft:isMobile? '50px':'90px',fontSize:isMobile?'55px':'60px'}} />
        <FontAwesomeIcon icon={faJava} style={{marginLeft:isMobile? '50px':'90px',fontSize:isMobile?'55px':'60px'}} />
        <img src={FirebaseIcon} style={{marginLeft:isMobile? '50px':'90px',fontSize:isMobile?'35px':'20px'}} alt="firebase icon" />
        </Grid>
        
        </Grid>
      </Grid>
      </div>
      <br/>
      <br/>
    </>
  );
};
