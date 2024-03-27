// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Brandlogos from "./Brandlogos";
import Pricerange from "./Pricerange";
import Priceunder from "./Priceunder";





import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
  border:'1px solid #ccc',
borderRadius:'20px'
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }} >
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item sm={12} xs={12} md={12} lg={6}  >
          <Item>  <Pricerange />
            <Priceunder /></Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={6}>
          <Item>  <Brandlogos /></Item>
        </Grid>
        {/* <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}

