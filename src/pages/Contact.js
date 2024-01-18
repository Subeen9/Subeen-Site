import React from 'react'
import { Divider, Typography, TextField, Stack, Paper,  Button, Box} from "@mui/material";
import styled from "@emotion/styled";

export const CustomDivider =styled(Divider)({
    width: "4%",
    margin: "auto",
    fontWeight: "bolder",
    borderBottomColor: "#191970",
    borderBottomWidth: "5px",
})

export const Contact = ()=>{ 
    return(
        <>
        <div id="contact">
        <h1 style={{textAlign:'center'}}>Contact</h1>
        <CustomDivider/>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
        <Typography variant ='h5' style={{textAlign:'center', marginTop:'10px'}}>
            Feel Free to contact me using the Form below.
        </Typography>
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '10px', width: '80%', maxWidth: '800px',}}>
                <Stack
                    component="form"
                    spacing={2}
                    noValidate
                    autoComplete="off"
                    action="https://formsubmit.co/010cb74573f404e82cdcd9e2cd00eb1d"
                    method="POST"
                >
                    <TextField
                        label='Name'
                        variant="filled"
                        size="small"
                        placeholder='Enter your Name'
                        fullWidth
                        name='name'
                    />
                    <TextField
                        label='Email'
                        variant="filled"
                        placeholder='Enter your Email'
                        fullWidth
                        name='Email'
                    />
                    <TextField
                        label='Message'
                        variant="filled"
                        placeholder='Enter your Message'
                        fullWidth
                        multiline
                        rows={6}
                        name='Message'
                    />
                    <Button variant="contained"  type="submit" style={{backgroundColor:'#191970'}}>
                        Submit
                    </Button>
                </Stack>
            </Paper>
            </Box>
            </div>
       </>
    )
}