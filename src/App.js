import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

import "./App.css";
import SignIn from "./components/SignIn";
import CourtCard from "./components/CourtCard";
import Home from "./components/Home";
import CourtDetails from "./components/CourtDetails";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import Addcourt from "./components/AddCourt";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        {/* <SignIn /> */}
        {/* <CourtCard /> */}
        {/* <Home /> */}
        {/* <CourtCard /> */}
        {/* <SignUp />
        <CourtDetails /> */}
        {/* <Account /> */}
        <Addcourt />
      </div>
    </ThemeProvider>
  );
}

export default App;
