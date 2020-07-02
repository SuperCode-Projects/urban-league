import React from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignIn = () => {
  return (
    <div id="backgroundSignIn" className="background">
      <div id="formSignIn">
        <TextField id="filled-basic" label="Name" variant="filled" />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          id="buttonLogIn"
        >
          Log In
        </Button>
      </div>
      <a href="#">Forgot your Password?</a>
      <br></br>
      <a href="#">
        <p>
          Noch keinen Accout? <br></br>
          Jetzt registrieren
        </p>
      </a>
    </div>
  );
};

export default SignIn;
