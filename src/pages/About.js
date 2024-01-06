import React from "react";
import { Button, Divider, Grid, Paper, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import JavascriptIcon from '@mui/icons-material/Javascript';
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
    '&:hover':{
        fontWeight:'bolder',
        backgroundColor:'#191970'
    }
})

export const About = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <Customdivider />
      <Grid container>
        <Grid item xs={6}>
          <Typography style={{fontWeight:'bold'}}> Yours Truely,</Typography>
          <br/>
          <Typography >
            I’m Subin Bista, a Computer Science student at Southeastern
            Louisiana University with a 4.0 GPA. I’ve worked as a Research
            Assistant, building a student portal using React JS and Firebase.
            I’ve also led a project to develop ‘Selu Thrift Store’, an
            e-commerce site, using ASP.NET Core, React, and TypeScript.
             I’ve participated in leadership bootcamps and look forward to
            contributing more to the field of Computer Science.
          </Typography>
          <br/>
          <Typography>
          I am open to job opportunities and internships that will allow me to grow and learn more.
           Please don’t hesitate to contact me if you believe my skills could be valuable to your team.
           <br/>
           <br/>
           <StyledButton>Contact</StyledButton>
          </Typography>
          
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" style={{textAlign: 'center', fontWeight:'bold'}}>Skills</Typography>
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell><JavascriptIcon/></TableCell>
                </TableRow>
            </TableHead>
            </Table>
        </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
