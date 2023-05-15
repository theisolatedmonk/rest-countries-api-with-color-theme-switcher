"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { atom, useAtom } from "jotai";

export const regionAtom = atom("");
export default function SelectLabels() {
  const [region, setRegion] = useAtom(regionAtom);
  // const [query, setQuery] = useAtom(queryAtom);
  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
    
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <Select
          sx={{ m: 1, height: 40 }}
          value={region}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Filter by Region</em>
          </MenuItem>
          <MenuItem value={"Americas"}>America</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}

// export default function SelectLabels(props: SelectLabelsType) {
//   const [regions, setRegions] = React.useState('');
//   const regions = props.params.regions;

//   const data = countryData.filter(
//     (country) => country.regions == regions
//   );

//   const handleChange = (event: SelectChangeEvent) => {
//     setRegions(event.target.value);
//   };
