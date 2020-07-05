import React from "react";
import "./Account.css";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const Account = () => {
  return (
    <div className="background">
      <div className="greenWithPic">
        {/* Icon X */}
        <div id="text">
          <p id="edit">Edit</p>
          <p className="p_big">Profile</p>
          <p id="logout">Logout</p>
        </div>
        <div id="Pic_round">
          <div id="userimage"></div>
        </div>
      </div>
      <div id="formSignUp">
        <h2>Victoria Roberts</h2>
        <h3>victoriaroberts@gmail.de</h3>
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

export default Account;
