import React from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";

// Customized styling der UI-Textfields und Buttons

const useStyles = makeStyles({
  password: {
    marginTop: "10px",
    marginBottom: "10px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  return (
    <div id="backgroundSignIn" className="background">
      <div id="formSignIn">
        <TextField
          className={classes.email}
          id="filled-basic"
          label="Email"
          variant="outlined"
          borderRadius="20px"
        />
        <TextField
          className={classes.password}
          id="filled-basic"
          label="Password"
          variant="outlined"
          type="password"
        />

        <Button
          className={classes.button}
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
