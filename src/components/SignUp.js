import React, { Component } from "react";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { auth, firestore } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link, Redirect } from "react-router-dom";

class SignUp extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleNameChanged = this.handleNameChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleSignUpClicked = this.handleSignUpClicked.bind(this);
  }

  componentDidMount() {
    this.setState({ name: "", email: "", password: "" });
    auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      await firestore
        .collection("users")
        .doc(user.uid)
        .set(
          { id: user.uid, email: user.email, displayName: this.state.name },
          { merge: true }
        );
    });
  }

  handleNameChanged(e) {
    this.setState({ name: e.target.value });
    console.log(this.state);
  }

  handleEmailChanged(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  async handleSignUpClicked() {
    console.log("signing up with", this.state);
    const response = await auth.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
    console.log("response", response);
    if (this.state.password < 6) {
      alert("Your Password must be at least 6 characters long");
    }
  }

  render() {
    return (
      <div className="background">
        {this.context && this.context.uid ? <Redirect to="/" /> : ""}
        <div className="greenWithPic">
          <div id="text">
            <p className="p_big">Add your Profile</p>
          </div>
          <div id="Pic_round">
            <div id="halfcircle">
              <p> + PICTURE</p>
            </div>
          </div>
        </div>
        <div id="formSignUp">
          <TextField
            id="filled-basic"
            label="Name"
            variant="outlined"
            onChange={this.handleNameChanged}
          />
          <TextField
            id="filled-basic"
            label="E-Mail"
            variant="outlined"
            onChange={this.handleEmailChanged}
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={this.handlePasswordChanged}
            error={this.state && this.state.password.length > 6}
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
          <p>
            I would like to receive your newsletter and other promotional stuff
          </p>
        </div>
        <div id="Buttons">
          <Link to="/">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="buttonBack"
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="Arrow"
                id="ArrowBack"
              />
              BACK
            </Button>
          </Link>{" "}
          <Button
            size="small"
            variant="contained"
            type="submit"
            id="buttonSave"
            onClick={this.handleSignUpClicked}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
