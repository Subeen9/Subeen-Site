import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import { AppBar, Box } from '@mui/material';
import styled from '@emotion/styled';

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

})



export const Navigation =()=>{
    return(
        <>
        <AppBar style={{backgroundColor:'white', height: '80px'}}>
        <Tabs style={{marginTop:'10px', padding: 0, display:'flex', alignContent: 'center', justifyContent:"center",}}>
            <NameTab label="Subin Bista"></NameTab>
            <Box sx={{ flexGrow: 1 }} />
            <ItemTab label =" Home"></ItemTab>
            <ItemTab label =" Contact"></ItemTab>
            <ItemTab label ="Projects"></ItemTab>
            <ItemTab label ="About Me"></ItemTab>
        </Tabs>
        </AppBar>
        </>
    )
}
