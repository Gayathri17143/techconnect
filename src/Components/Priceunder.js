import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
function App() {
  return (
    <div className='mar'>
         <Typography mb={2}>Price Around</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
        <a href="https://example.com" style={{color:'green'}}>SmartWatch Under ₹2000</a>  
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>Tabs Under ₹12000</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>Laptop Under ₹35000</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>Speaker Under ₹1000</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>Mobiles Under ₹25000</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>HeadPhones Under ₹800</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>PowerBanks Under ₹2000</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <a href="https://example.com" style={{color:'green'}}>IPhones Under ₹60000</a>
        </Grid>
        {/* Add more Grid items as needed */}
      </Grid>
    </div>
  );
}

export default App;
