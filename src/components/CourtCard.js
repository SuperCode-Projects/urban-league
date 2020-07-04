import React from "react";
import "./CourtCard.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import IconList from "./IconList";

const CourtCard = () => {
  return (
    <div className="CourtCardDiv">
      <img
        className="CourtPicSmall"
        src="./images/soccer-field_example.jpg"
      ></img>
      <div className="CourtCardDescription">
        <h3>Milano Academy</h3>
        <p>Adress...</p>
        <Button size="small" variant="contained" type="submit" id="buttonLogIn">
          ROUTE
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" />
        </Button>
      </div>
    </div>
  );
};

export default CourtCard;
