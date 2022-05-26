// React
import React, { Children } from "react";
import { useState } from "react";

// MUI
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// CSS
import "./Header.css";

export default function Header(props) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            XFlix
          </Typography>
          {props.children}
          <Button variant="contained" endIcon={<UploadIcon />}>
            {" "}
            Upload{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
