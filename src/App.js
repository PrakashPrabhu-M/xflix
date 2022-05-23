// React
import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

// Axios
import axios from "axios";

// Local
import Header from "./Pages/Landing Page/Header/Header";
import DashBoard from "./Pages/Landing Page/DashBoard/DashBoard";
import Panel from "./Pages/Landing Page/Panel/Panel";

// MUI
import Stack from "@mui/material/Stack";

// CSS
import "./App.css";

const config = {
  endpoint: "https://215688bf-0d9b-493a-a105-0d345f0c4322.mock.pstmn.io",
};

const filters = {
  categories: ["All", "Education", "Sports", "Comedy", "Lifestyle"],
  age: ["All", "7+", "12+", "16+", "18+"],
};

function App() {
  const [data, setData] = useState(false);
  const [ALL_DATA, setAllData]=useState([]);

  function searchHandler(str) {
    const req = ALL_DATA.filter((vdo) => {
      const title = vdo.title.toLowerCase();
      str.toUpperCase();
      return title.includes(str);
    });
    setData(req);
  }

  async function getData(url) {
    const req = await axios.get(url + "/v1/videos");
    const { videos } = req.data;
    console.log(videos);
    setAllData(videos);
    setData(videos);
  }
  useEffect(() => {
    getData(config.endpoint);
  }, []);

  return (
    <Stack spacing={1}>
      <Header search={searchHandler} />
      <Panel filters={filters} />
      <DashBoard url={config.endpoint} videos={data} />
    </Stack>
  );
}

export default App;
