import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { GitHub, Instagram, YouTube } from "@mui/icons-material";
import styled from '@emotion/styled';
export const MyDivider = styled(Divider)({
    width: "50%",
    margin: "auto",
    borderBottomWidth: "3px",
    color: 'black',
    marginTop: '20px',
    backgroundColor:'white'
})



export const Footer = ()=>{
    const time = new Date();
    const year = time.getFullYear();
    return(
        <>
       <div style={{backgroundColor:'black'}}>
        <Grid container spacing={2} style={{color:'white'}}>
            <Grid item xs={8}>
             <Typography variant="3"style={{marginLeft:'10px'}}>
                SUBIN BISTA
             </Typography>
             <br/>
             <br/>
             <br/>
             <Typography style={{marginLeft:'10px'}}>
                Computer Science Enthusiasist Interested in Full Stack Development
             </Typography>
            </Grid>
            <Grid item xs={4}>
            SOCIAL
            <Grid container spacing={2}>
                <Grid item xs={1} style={{marginTop:'20px'}}>
                    <a href= 'https://www.linkedin.com/in/subin-bista-' target="_blank" rel="noopener noreferrer">
                    <LinkedIn/>
                    </a>
                   
                </Grid>
                <Grid item xs={1}style={{marginTop:'20px'}}>
                <a href="https://github.com/Subeen9" target="_blank" rel="noopener noreferrer">
                <GitHub  />
                </a>
                </Grid>
                <Grid item xs={1} style={{marginTop:'20px'}}>
                <a href="https://www.instagram.com/bistasubeen715/"target="_blank" rel="noopener noreferrer">
                <Instagram />
                </a>
                </Grid>
                <Grid item xs={1} style={{marginTop:'20px'}}>
                <a href="https://www.youtube.com/channel/UC52b7k_geBk6NwcqJLvsdGA"target="_blank" rel="noopener noreferrer">
                <YouTube />
                </a>
                </Grid>
            </Grid>
            
            </Grid>
        </Grid>
        <MyDivider/>
        <p style={{textAlign:'center',color:'white'}}>
           © Subin {year}
        </p>
       </div>
        </>
    )
}
