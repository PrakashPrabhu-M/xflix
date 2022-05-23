// React
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

// MUI
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SortIcon from "@mui/icons-material/Sort";

// CSS
import "./Panel.css";

export default function Panel(props) {
  const [selected, setSelected] = useState(() => {
    let color = {};
    for (let cato of props.filters.categories) color[cato] = "default";
    return color;
  });

  function genreHandler(e, cato) {
    let cpy = Object.assign({}, selected);
    if (selected[cato] === "default") {
      cpy[cato] = "primary";
      setSelected(cpy);
    } else {
      cpy[cato] = "default";
      setSelected(cpy);
    }
    console.log(cpy);
  }

  return (
    <>
      <Stack direction="row" spacing={1}>
        {props.filters.categories.map((cato, indx) => (
          <Chip
            key={indx}
            label={cato}
            onClick={(e) => genreHandler(e, cato)}
            color={selected[cato]}
          />
        ))}
        <Chip icon={<SortIcon />} label="Release Date" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={1}>
        {props.filters.age.map((a, indx) => (
          <Chip key={indx} label={a} />
        ))}
      </Stack>
    </>
  );
}
