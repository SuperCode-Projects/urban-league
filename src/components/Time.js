import React from "react";
import "./Time.css";
import "./CourtDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

const Time = () => {
  return (
    // <div className="background">
    <div className="TimeDiv">
      <h4>TIME</h4>
      <div id="buttonListTime">
        <button className="buttonGreen">30 Min</button>
        <button className="buttonGreen">45 Min</button>
        <button className="buttonGreen">60 Min</button>
        <button className="buttonGreen">90 Min</button>
      </div>
      <h4>SPORTS</h4>
      <div id="SportsDiv">
        <img src="./images/icons/icon_soccer.png" alt="icon soccer"></img>
        <Button
          size="small"
          variant="contained"
          type="submit"
          id="buttonCheckIn"
        >
          CHECK IN{" "}
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" />
        </Button>
      </div>
    </div>
    // </div>
  );
};

export default Time;
