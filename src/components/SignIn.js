import React from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

// Customized styling der UI-Textfields und Buttons

const useStyles = makeStyles({
  password: {
    height: "2.8em",
    backgroundColor: "white",
    borderRadius: "20px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  name: {
    height: "2.8em",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  button: {
    backgroundColor: "#56CCF2",
    borderRadius: "20px",
    height: "2.8em",
  },
});

const styleButton = {
  bgcolor: "#56CCF2",
};

const SignIn = () => {
  const classes = useStyles();
  return (
    <div id="backgroundSignIn" className="background">
      <div id="formSignIn">
        <TextField
          className={classes.name}
          id="filled-basic"
          label="Name"
          variant="filled"
        />
        <TextField
          className={classes.password}
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
        />

        <Button
          {...styleButton}
          className={classes.button}
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
