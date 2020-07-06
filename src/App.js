import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/signin">
								<SignIn />
							</Route>
							<Route exact path="/signup">
								<SignUp />
							</Route>
							<Route exact path="/account">
								<Account />
							</Route>
							{/* <UserContext.Consumer>
								{(user) => (user && user.uid ? <Home /> : <SignIn />)}
							</UserContext.Consumer> */}
							{/* <CourtCard /> */}
							{/* <Home /> */}
							{/* <CourtCard /> */}
							{/* <CourtDetails /> */}
							{/* <Addcourt /> */}
						</Switch>
					</div>
				</UserProvider>
			</ThemeProvider>
		);
	}
}

export default App;
