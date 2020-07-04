import React from "react";

import "./CourtDetails.css";
import { orange, lightBlue } from "@material-ui/core/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourtDetails = () => {
  return (
    <div className="background">
      <img className="CourtPic" src="./images/soccer-field_example.jpg"></img>
      <div className="CourtCardBig">
        <h1>Milano Academy</h1>
        <div className="Rating">
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
        </div>
      </div>
    </div>
  );
};

export default CourtDetails;
