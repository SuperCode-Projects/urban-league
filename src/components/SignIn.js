import React from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignIn = () => {
  return (
    <div id="backgroundSignIn">
      <form id="formSignIn">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          id="buttonLogIn"
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
