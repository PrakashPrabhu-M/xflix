// React
import React from "react";
import { useState } from "react";

// MUI
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SortIcon from "@mui/icons-material/Sort";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// CSS
import "./Panel.css";
import { Container } from "@mui/system";

export default function Panel(props) {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    let color = {};
    for (let cato of props.filters.categories) color[cato] = "default";
    return color;
  });

  const [selectedAge, setSelectedAge] = useState(() => {
    let color = {};
    for (let age of props.filters.age) color[age] = "default";
    return color;
  });

  const [sortBy, setSortBy] = useState(props.filters.sort[0]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const sortHandler = (e,currentSort) => {
    setAnchorEl(null);
    if(currentSort==='backdropClick') return;
    if(sortBy===currentSort) return;
    setSortBy(currentSort);
    props.sort(currentSort);
  };

  function genreHandler(e, cato) {
    let cpy = Object.assign({}, selectedCategory);
    if (cato === "All") {
      if (cpy[cato] === "default")
        for (let elm of Object.keys(cpy)) cpy[elm] = props.colors.category;
      else for (let elm of Object.keys(cpy)) cpy[elm] = "default";
    } else if (selectedCategory[cato] === "default") {
      cpy[cato] = props.colors.category;
    } else {
      cpy[cato] = "default";
      cpy.All = "default";
    }
    setSelectedCategory(cpy);
    console.log(cpy);
    props.genre(cpy);
  }

  function ageHandler(e, age) {
    let cpy = Object.assign({}, selectedAge);

    if (age === "All") {
      if (cpy[age] === "default")
        for (let element of Object.keys(cpy)) {
          cpy[element] = props.colors.age;
        }
      else
        for (let element of Object.keys(cpy)) {
          cpy[element] = "default";
        }
    } else if (cpy[age] === props.colors.age) {
      for (let a of Object.keys(cpy)) cpy[a] = "default";
    } else {
      for (let a of Object.keys(cpy)) cpy[a] = "default";
      cpy[age] = props.colors.age;
    }
    setSelectedAge(cpy);
    props.age(cpy);
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={2}>
        {props.filters.categories.map((cato, indx) => (
          <Chip
            key={indx}
            label={cato}
            onClick={(e) => genreHandler(e, cato)}
            color={selectedCategory[cato]}
          />
        ))}

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          startIcon={<SortIcon />}
          sx={{ borderRadius: 10 }}
          color={props.colors.sort}
        >
          {sortBy}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={sortHandler}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
        {props.filters.sort.map((item)=><MenuItem key={item} onClick={(e)=>sortHandler(e,item)}>{item}</MenuItem>)}
          {/* <MenuItem onClick={(e)=>sortHandler(e,'Release Date')}>Release Date</MenuItem>
          <MenuItem onClick={(e)=>sortHandler(e,'View Count')}>View Count</MenuItem> */}
        </Menu>
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        {props.filters.age.map((age, indx) => (
          <Chip
            key={indx}
            label={age}
            onClick={(e) => ageHandler(e, age)}
            color={selectedAge[age]}
          />
        ))}
      </Stack>
    </Container>
  );
}
