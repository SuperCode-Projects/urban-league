import React, { Component } from "react";
import IconList from "./IconList";
import CourtCard from "./CourtCard";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import Map from "./Map";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Home extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div id="backgroundHome" className="background">
        <Map />
        {!this.context || !this.context.uid ? <Redirect to="signin" /> : ""}
        <div className="searchCity">
          <TextField
            id="filled-search"
            label="CITYNAME"
            variant="outlined"
            id="searchCity"
          />

          <Link to="/account">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="gotoProfil"
              //   onClick={this.handleSignUpClicked}
            >
              <FontAwesomeIcon icon={faUser} className="gotoProfil" />
            </Button>
          </Link>
        </div>

        <CourtCard />

        <div id="divIconList">
          <IconList />
        </div>
      </div>
    );
  }
}

export default Home;
