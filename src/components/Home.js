import React, { Component } from "react";
import IconList from "./IconList";
import CourtCard from "./CourtCard";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";

class Home extends Component {
  static contextType = UserContext
  
	render() {
		return (
			<div id="backgroundHome" className="background">
				{
					!this.context || !this.context.uid ? <Redirect to="signin" /> : ""
				}
				<TextField
					id="filled-search"
					label="CITYNAME"
					variant="outlined"
				/>

				<CourtCard />

				<div id="divIconList">
					<IconList />
				</div>
			</div>
		);
	}
}

export default Home;
