import React from "react";
import ResctDOM from "react-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import Cointainer from "../Components/CardCointainer/Cointainer";
import "./DashBoard.css";

export default function DashBoard({ url, videos }) {
  if (!videos) return <h1>Loading...</h1>;
  return <Cointainer items={videos} />;
}

// const {data}=await getData(props.url);
// console.log(data.videos);
// console.log(props)
