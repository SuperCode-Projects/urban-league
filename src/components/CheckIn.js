import React from "react";
import "./CourtDetails.css";
import Button from "@material-ui/core/Button";

const CheckIn = () => {
  return (
    <div id="checkin">
      <h4>TIME</h4>
      <div id="buttonList">
        <button className="buttonGreen">30 Min</button>
        <button className="buttonGreen">45 Min</button>
        <button className="buttonGreen">60 Min</button>
        <button className="buttonGreen">90 Min</button>
      </div>
      <h4>SPORT</h4>
      <Button size="small" variant="contained" type="submit" id="buttonLogIn">
        CHECK IN
      </Button>
    </div>
  );
};

export default CheckIn;
