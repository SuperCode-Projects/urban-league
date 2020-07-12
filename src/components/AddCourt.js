import React from "react";
import "./SignUp.css";
import "./CourtDetails.css";
import TextField from "@material-ui/core/TextField";
import IconList from "./IconList";
import "./AddCourt.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const AddCourt = () => {
  return (
    <div className="background">
      <div className="greenWithPic">
        <div id="text">
          <Link to="/">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="myLocation"
            >
              BACK
            </Button>
          </Link>
          <p className="p_big">New Court</p>

          <Button
            size="small"
            variant="contained"
            type="submit"
            id="myLocation"
          >
            SAVE
          </Button>
        </div>
        <div id="Pic_round">
          <div id="halfcircle">
            <p> + PICTURE</p>
          </div>
        </div>
      </div>
      <div id="formSignUp">
        <TextField id="filled-basic" label="Name" variant="outlined" />
        <TextField id="filled-basic" label="Adress" variant="outlined" />
        <TextField id="filled-basic" label="Description" variant="outlined" />
      </div>
      <h4>POSSIBLE SPORTS</h4>
      <IconList />
      <div id="newsletter-check"></div>
      <h4>DETAILS</h4>

      <div id="buttonList" className="buttonList_newCourt">
        <button className="buttonGreen">Natural Grass</button>
        <button className="buttonGreen">Concrete</button>
        <button className="buttonGreen">Rubber</button>
      </div>

      <div id="buttonList" className="buttonList_newCourt">
        <button className="buttonGreen">Artificial Grass</button>
        <button className="buttonGreen">Sand</button>
        <button className="buttonGreen">Other</button>
      </div>
      {/* <h4>SIZE</h4>
      <div id="sizeField">
        <TextField id="filled-basic" label="Lenght" variant="outlined" />
        <TextField id="filled-basic" label="Width" variant="outlined" />
      </div> */}
    </div>
  );
};

export default AddCourt;
