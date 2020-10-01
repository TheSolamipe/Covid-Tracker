import React from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./../sass/main.scss";

function Header({ country, onCountryChange, countries }) {
  return (
    <div className="header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="header__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem value={country.value} key={country.id}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
