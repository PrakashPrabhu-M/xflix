// React
import React from "react";
import { useState, useEffect } from "react";

// Axios
import axios from "axios";

// Local
import Header from "../Shared/Header/Header";
import DashBoard from "./DashBoard/DashBoard";
import Panel from "./Panel/Panel";
import { config } from "../../App";

// MUI
import Stack from "@mui/material/Stack";

const disp = {
  categories: ["All", "Education", "Sports", "Comedy", "Lifestyle"],
  age: ["All", "7+", "12+", "16+", "18+"],
  sort: ["View Count", "Release Date"],
};

const COLORS = { category: "secondary", age: "secondary", sort: "primary" };

function LandingPage() {
  const [data, setData] = useState(false);
  const [ALL_DATA, setAllData] = useState([]);
  // console.log(ALL_DATA);

  function searchHandler(str) {
    // const req = ALL_DATA.filter((vdo) => {
    //   const title = vdo.title.toLowerCase();
    //   str = str.toLowerCase();
    //   return title.includes(str);
    // });
    // setData(req);
    let req;
    if (str.length !== 0) req = "/v1/videos?title=" + str;
    else req = "/v1/videos";
    getData(config.endpoint, req);
  }

  function sortHandler(str) {
    // /v1/videos?sortBy=viewCount
    let req = "/v1/videos";

    function toCamelCase(str) {
      str = str.toLowerCase();
      for (let i = 1; i < str.length - 1; i++)
        if (str[i - 1] === " ")
          str = str.slice(0, i - 1) + str[i].toUpperCase() + str.slice(i + 1);
      return str;
    }

    if (!!str) {
      str = toCamelCase(str);
      req += `?sortBy=${str}`;
    }
    getData(config.endpoint, req);
  }

  function genreHandler(obj) {
    let request = "/v1/videos";
    const arr = [];
    for (let genre of Object.keys(obj))
      if (obj[genre] === COLORS.category) arr.push(genre);
    if (arr.includes("All")) request += "?genres=All";
    else if (arr.length !== 0) request += "?genres=" + arr.join(",");
    getData(config.endpoint, request);
  }

  function ageHandler(obj) {
    let request = "/v1/videos";
    let extension;
    for (let age of Object.keys(obj))
      if (obj[age] === COLORS.age) {
        extension = "?contentRating=" + age.replace("+", "%2B");
        break;
      }
    if (!!extension) getData(config.endpoint, request + extension);
    else getData(config.endpoint, request);
  }

  async function getData(url, request) {
    const req = await axios.get(url + request);
    const { videos } = req.data;
    setData(videos);
    return videos;
  }

  useEffect(
    () => async () => {
      const videos = await getData(config.endpoint, "/v1/videos");
      setAllData(videos);
    },
    []
  );

  return (
    <Stack spacing={1}>
      <Header search={searchHandler} />
      <Panel
        filters={disp}
        genre={genreHandler}
        age={ageHandler}
        sort={sortHandler}
        colors={COLORS}
      />
      <DashBoard url={config.endpoint} videos={data} />
    </Stack>
  );
}

export default LandingPage;
