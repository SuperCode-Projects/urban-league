import React, { Component } from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { borders } from "@material-ui/system";
import { auth } from "../firebase";

class SignIn extends Component {

  componentDidMount() {
    this.setState({ email: "", password: "" });
  }

  handleSignInClicked = async () => {
    console.log("Signing in with", this.state)
    await auth.signInWithEmailAndPassword(this.state.email, this.state.password);

  }

  handleEmailChanged = e => this.setState({ email: e.target.value });

  handlePasswordChanged = e => this.setState({ password: e.target.value });


  render() {
    return (
      <div id="backgroundSignIn" className="background">
        <div id="formSignIn">
          <TextField
            id="filled-basic"
            label="Email"
            variant="outlined"
            onChange={this.handleEmailChanged}
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={this.handlePasswordChanged}
          />

          <Button
            size="large"
            variant="contained"
            color="error"
            type="submit"
            id="buttonLogIn"
            onClick={this.handleSignInClicked}
          >
            Log In
        </Button>
        </div>
        <br></br>
        <a href="#" id="forgotPassword">
          Forgot your Password?
      </a>
        <br></br>
        <a href="#">
          <p id="account">
            Noch keinen Accout? <br></br>
          Jetzt registrieren
        </p>
        </a>
      </div>
    );
  }
};

export default SignIn;
