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
             <Typography variant="3">
                SUBIN BISTA
             </Typography>
             <br/>
             <br/>
             <br/>
             <Typography>
                Computer Science Enthusiasist Interested in Full Stack Development
             </Typography>
            </Grid>
            <Grid item xs={4}>
            SOCIAL
            <Grid container spacing={2}>
                <Grid item xs={1} style={{marginTop:'20px'}}>
                    <LinkedIn/>
                </Grid>
                <Grid item xs={1}style={{marginTop:'20px'}}>
                    <GitHub/>
                </Grid>
                <Grid item xs={1} style={{marginTop:'20px'}}>
                    <Instagram/>
                </Grid>
                <Grid item xs={1} style={{marginTop:'20px'}}>
                    <YouTube/>
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
