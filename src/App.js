import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

import "./App.css";
import SignIn from "./components/SignIn";
import CourtCard from "./components/CourtCard";
import Home from "./components/Home";
import CourtDetails from "./components/CourtDetails";
import Map from "./components/Map"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
<<<<<<< HEAD
        {/* <SignIn /> */}
        {/* <CourtCard /> */}
        {/* <Home /> */}
        <CourtDetails />
=======
        <SignIn />
        {<CourtCard />}
        {<Home />}
        {<CourtDetails />}
        {<Map />}
>>>>>>> 1c958412b9e361b225038492aab904d12b685308
      </div>
    </ThemeProvider>
  );
}

export default App;
