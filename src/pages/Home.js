import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import Subin from "../assests/subin2.png";
import Cloud from "../assests/cloud.png";
import "../App.css";
import styled from "@emotion/styled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { scroller } from "react-scroll";


const CenterContent = styled("div")({
  display: "flex",
  justifyContent: "center",
  color: "#191970",
  marginLeft: "120px",
});
const IconContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #191970",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  margin: "10px",
  '&:hover':{
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
  }
});
const HighlightedText = styled(Typography)({
  fontSize: "4rem",
  color: "#191970",
  fontWeight: "bold",
});
const HighlightedButton = styled(Button)({
  fontSize: "1.5rem",
  padding: "10px 20px",
  border: "2px solid #191970",
  backgroundColor: "#ADD8E6",
  boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
 
  '&:hover':{
    fontWeight: 'bolder'
  },
 
});
const handleClick =()=>{
  scroller.scrollTo('projects',{
    duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset:-100,
  })
}

export const Home = () => {
  return (
    <>
    <div id="home">
      <Grid container spacing={2} style={{ backgroundColor: "#ADD8E6" }}>
        <Grid item xs={8} style={{ marginTop: "90px" }}>
          <img
            src={Cloud}
            style={{ animation: "float 5s ease-in-out infinite" }}
            className="float"
            alt="cloud"
          />
          <CenterContent>
            <HighlightedText variant="h4">I am Subin Bista</HighlightedText>
          </CenterContent>
          <br />
          <br />
          <CenterContent>
            <Typography variant="h6">
              Computer Science Student interested in Full Stack development
            </Typography>
          </CenterContent>
          <br />
          <br />
          <CenterContent>
            <HighlightedButton
              variant="contained"
              style={{ backgroundColor: "#191970", color: "#FFFFFF" }}
              onClick={handleClick}
            >
              See my Projects
            </HighlightedButton>
          </CenterContent>
          <Grid xs={0.6} style={{marginLeft:'10px'}}>
            <Stack spacing={2}>
            <IconContainer>
  <a href='https://www.linkedin.com/in/subin-bista-' target="_blank" rel="noopener noreferrer">
    <LinkedInIcon fontSize="large" />
  </a>
</IconContainer>
              <IconContainer>
                <a href="https://github.com/Subeen9" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" />
                </a>
               
              </IconContainer>
              <IconContainer>
                <a href="https://www.instagram.com/bistasubeen715/"target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" />
                </a>
              
              </IconContainer>

              <br />
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          {/* <img src={Cloud} style={{animation: 'float 5s ease-in-out infinite'}} className="float" alt="profile"/> */}
          <img
            src={Subin}
            style={{
              marginTop: "2px",
              width: "100%",
              height: "auto",
              
            }}
            alt="profile image"
          />
        </Grid>
      </Grid>
      </div>
    </>
  );
};
