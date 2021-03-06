import React, { Component } from "react";
import "./Account.css";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { UserContext } from "../providers/UserProvider";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../firebase";

class Account extends Component {
  componentDidMount() {
    console.log(this.context);
  }

  static contextType = UserContext;

  render() {
    return (
      <div className="background">
        {!this.context ? <Redirect to="/signin" /> : ""}
        <div className="greenWithPic">
          <div id="text">
            <p id="edit">Edit</p>
            <p className="p_big">Profile</p>
          </div>
          <div id="Pic_round">
            <div id="userimage"></div>
          </div>
        </div>
        <div id="formSignUp">
          <h2>{this.context && this.context.displayName}</h2>
          <h3>{this.context && this.context.email}</h3>
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
        </div>
        <h4>FAVOURITE SPORTS</h4>
        <IconList />
        <div id="newsletter-check">
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <p>I would like to receive your newsletter and promos</p>
        </div>
        <div id="text">
          <Button
            size="small"
            variant="contained"
            type="submit"
            id="buttonSave"
            onClick={() => auth.signOut()}
            id="logout"
          >
            Logout
          </Button>
          <Link to="/">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="buttonSave"
            >
              SAVE
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Account;
