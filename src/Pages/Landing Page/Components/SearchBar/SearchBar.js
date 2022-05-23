// React
import React from "react";
import ReactDOM from "react-dom";

// MUI
import Input from '@mui/material/Input';

// CSS
import "./SearchBar.css";

export default function Header() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Input label="Search field" type="search" value={value} onChange={handleChange} variant='standard' />
    </div>
  );
}
