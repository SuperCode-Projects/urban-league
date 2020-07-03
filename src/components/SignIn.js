import React from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { borders } from "@material-ui/system";

const SignIn = () => {
  return (
    <div id="backgroundSignIn" className="background">
      <div id="formSignIn">
        <TextField id="filled-basic" label="Email" variant="outlined" />
        <TextField
          id="filled-basic"
          label="Password"
          variant="outlined"
          type="password"
        />

        <Button
          size="large"
          variant="contained"
          color="error"
          type="submit"
          id="buttonLogIn"
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
        <p>
          Noch keinen Accout? <br></br>
          Jetzt registrieren
        </p>
      </a>
    </div>
  );
};

export default SignIn;
