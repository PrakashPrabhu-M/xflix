// React
import React from "react";

// MUI
import { Typography } from "@mui/material";

// Local
import Cointainer from "../Components/CardCointainer/Cointainer";

// CSS
import "./DashBoard.css";

export default function DashBoard({ url, videos }) {
  if (!videos) return <Typography variant="h2">Loading...</Typography>;
  return <Cointainer items={videos} />;
}

// const {data}=await getData(props.url);
// console.log(data.videos);
// console.log(props)
