import React from 'react';
import { useState } from 'react';
import { Box,FormControl,InputLabel,Select,MenuItem } from '@mui/material';

const SelectRegions = () => {
    const [regions, setRegions] = useState('');

    const handleChange = (event) => {
      setRegions(event.target.value);
    };
  return (
    <Box sx={{ width:300,marginRight:"75px",height:"50px" }}>
    <FormControl fullWidth >
      <InputLabel id="filter-regions">Filter by regions</InputLabel>
      <Select
        labelId="filter-regions"
        id="filter-regions"
        value={regions}
        label="Filter by regions"
        onChange={handleChange}
      >
        <MenuItem value={10}>Africa</MenuItem>
        <MenuItem value={20}>America</MenuItem>
        <MenuItem value={30}>Asia</MenuItem>
        <MenuItem value={40}>Europe</MenuItem>
        <MenuItem value={50}>Oceania</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default SelectRegions