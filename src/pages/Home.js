import React from "react";
import { Grid, Typography,Button,styled } from "@mui/material";
import Subin from '../assests/subin2.png'
import Cloud from '../assests/cloud.png'
import './App.css'
export const Home = ()=>{
    return(
        <>
        <Grid container spacing={2} style={{backgroundColor: '#ADD8E6'}}>
        <Grid item xs={8} style={{marginTop:'90px'}}>
            <img src={Cloud} style={{animation: 'float 5s ease-in-out infinite'}} className="float" />
            <Typography variant="h4" gutterBottom style={{color: '#191970'}}>
                Hey There
            </Typography>
            <Typography variant="h2" gutterBottom style={{color: '#191970'}}>
                I am Subin Bista
            </Typography>
            <Typography variant="h4" gutterBottom style={{color: '#191970'}}>
                Computer Science Student interested in Full Stack development 
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#191970', color: '#FFFFFF'}}>
                See my Projects
            </Button>
            <img src={Cloud} style={{animation: 'float 5s ease-in-out infinite'}} className="float" />
        
        </Grid>
        <Grid item xs={4} >

            <img src={Subin} style={{marginTop:'2px', width: '100%', height: 'auto', marginRight:'90px'}} alt="profile image"/>
        </Grid>
        </Grid>
        </>
    )
}

// Add this to your CSS

