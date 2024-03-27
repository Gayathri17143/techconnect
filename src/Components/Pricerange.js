import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function RangeSlider() {
  const [value, setValue] = React.useState([1000, 50000]); // Default values [min, max]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 800,margin:'0 auto'}}padding={6}>
      <Typography id="range-slider" sx={{color:'#000', textAlign:'left'}} fontWeight={600} gutterBottom>
        Shop By Price
      </Typography>
      <Slider
    
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on" // Display value on slider thumb
        aria-labelledby="range-slider"
        min={0} // Minimum value
        max={50000} // Maximum value
        sx={{
            mt:4,
            color: 'primary.main', // Slider color
            '& .MuiSlider-valueLabel': {
                backgroundColor:'transparent',
              color: 'primary.main' // Value label color
            }
          }}
      />
      <Button variant='contained' color='primary' sx={{mt:1}}>Find Products</Button >
    </Box>
  );
}

export default RangeSlider;
