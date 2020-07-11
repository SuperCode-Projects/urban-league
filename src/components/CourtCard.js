import React from "react";
import "./CourtCard.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import IconList from "./IconList";
import { Link } from "react-router-dom";

const CourtCard = props => {



  return (
    <div className="CourtCardDiv">
      <img
        className="CourtPicSmall"
        src="./images/Fussballplatz-Vagedesstrasse.png"
      ></img>

      <div className="CourtCardDescription">
        <h3>{props.courtName}</h3>
        <p>{props.courtAddress}</p>
        <div id="RateIt">
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
        </div>
        <Link to="/courtdetails">
          <Button
            size="small"
            variant="contained"
            type="submit"
            id="buttonDetails"
          >
            DETAILS
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourtCard;
