import React, { Component } from "react";
import IconList from "./IconList";
import CourtCard from "./CourtCard";
import Time from "./Time";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import Map from "./Map";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faPlus,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
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
          <div id="Homebuttons">
            {" "}
            <Link to="/account">
              <Button
                size="small"
                variant="contained"
                type="submit"
                id="gotoAccount"
              >
                <FontAwesomeIcon icon={faUser} />
              </Button>
            </Link>
            <Link to="/addcourt">
              <Button
                size="small"
                variant="contained"
                type="submit"
                id="addCourtButton"
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Link>
            <Link to="#">
              <Button
                size="small"
                variant="contained"
                type="submit"
                id="myLocation"

                //   onClick={this.handleSignUpClicked}
              >
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="gotoProfil"
                />
              </Button>
            </Link>
          </div>
        </div>
        <CourtCard />
        {/* <Time /> */}

        <div id="divIconList">
          <IconList />
        </div>
      </div>
    );
  }
}

export default Home;
