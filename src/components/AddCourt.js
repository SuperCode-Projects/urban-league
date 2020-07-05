import React from "react";
import "./SignUp.css";
import "./CourtDetails.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";

const Addcourt = () => {
  return (
    <div className="background">
      <div className="greenWithPic">
        {/* Icon X */}
        <div id="text">
          <p>X</p>
          <p className="p_big">New Court</p>
          <p>Save</p>
        </div>
        <div id="Pic_round">
          <div id="halfcircle">
            <p> + PICTURE</p>
          </div>
        </div>
      </div>
      <div id="formSignUp">
        <TextField id="filled-basic" label="Name" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={2}
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
      <h4>POSSIBLE SPORTS</h4>
      <IconList />
      <div id="newsletter-check"></div>
      <h4>DETAILS</h4>
      <div id="buttonList">
        <button className="buttonGreen" id="buttonList_newCourt">
          Natural Grass
        </button>
        <button className="buttonGreen">Concrete</button>
        <button className="buttonGreen">Rubber</button>
      </div>
      <h4>SIZE</h4>
      <button>Lenght</button>
      <button>Width</button>
    </div>
  );
};

export default Addcourt;
