import React, { Component } from "react";
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
import UserProvider, { UserContext } from "./providers/UserProvider";


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <UserProvider>
          <div id="App">
            {/* <CourtCard /> */}
            <UserContext.Consumer>
              {user => user && user.uid ? <Home /> : <SignIn />}
            </UserContext.Consumer>
            {/* <Home /> */}
            {/* <CourtCard /> */}
            {/* <SignUp /> */}
            {/* <CourtDetails /> */}
            {/* <Account /> */}
            {/* <Addcourt /> */}
          </div>
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default App;
