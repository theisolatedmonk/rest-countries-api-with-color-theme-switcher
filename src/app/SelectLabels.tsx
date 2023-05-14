"use client"
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
  const [region, setRegion] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  return (
    <div>
     
      <FormControl sx={{ m: 1, minWidth: 180, }}>
        <Select sx={{ m: 1, height:40,}}
          value={region}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Filter by Region</em>
          </MenuItem>
          <MenuItem value={"1"}>Africa</MenuItem>
          <MenuItem value={"2"}>America</MenuItem>
          <MenuItem value={"3"}>Asia</MenuItem>
          <MenuItem value={"4"}>Europe</MenuItem>
          <MenuItem value={"5"}>Oceania</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}

// export default function SelectLabels(props: SelectLabelsType) {
//   const [regions, setRegions] = React.useState('');
//   const region = props.params.region;
  
//   const data = countryData.filter(
//     (country) => country.region == region
//   );

//   const handleChange = (event: SelectChangeEvent) => {
//     setRegions(event.target.value);
//   };