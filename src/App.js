import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

import "./App.css";
import SignIn from "./components/SignIn";
import CourtCard from "./components/CourtCard";
import Home from "./components/Home";
import IconList from "./components/IconList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        {/* <SignIn />
        <br />
        <br /> */}
        {/* <CourtCard /> */}
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
