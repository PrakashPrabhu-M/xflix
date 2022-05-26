// React
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Local
import LandingPage from "./Pages/Landing Page/LandingPage";

// MUI
import CssBaseline from "@mui/material/CssBaseline";

// CSS
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const config = {
  endpoint: "https://da0b4e9d-ffa6-4914-b2a3-a22b9f378e10.mock.pstmn.io",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
