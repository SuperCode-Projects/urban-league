import React from "react";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  return (
    <div className="background">
      <div className="greenWithPic">
        {/* Icon X */}
        <div id="text">
          <p>X</p>
          <p className="p_big">Profile</p>
          <p>Logout</p>
        </div>
        <div id="Pic_round">
          <div id="halfcircle">
            <p> + PICTURE</p>
          </div>
        </div>
      </div>
      <div id="formSignUp">
        <TextField id="filled-basic" label="Name" variant="outlined" />
        <TextField id="filled-basic" label="E-Mail" variant="outlined" />
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
        <p>
          I would like to receive your newsletter and other promotional stuff
        </p>
      </div>
      <Button size="small" variant="contained" type="submit" id="buttonSave">
        SAVE
      </Button>
    </div>
  );
};

export default SignUp;
