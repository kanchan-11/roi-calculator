import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Scrollbar = ({ label, list, max, onValueChange, name }) => {
  const valuetext = (value) => {
    return `${value}/`;
  };

  return (
    <>
      <p>{label}</p>
      <Box>
        <Slider
          // aria-label="scrollbar"
          defaultValue={1}
          getAriaValueText={valuetext}
          step={1}
          // valueLabelDisplay="on"
          marks={list}
          max={max}
          min={1}
          onChange={onValueChange}
          name={name}
        />
      </Box>
    </>
  );
};
export default Scrollbar;
