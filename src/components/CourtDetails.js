import React from "react";
import Button from "@material-ui/core/Button";

import "./CourtDetails.css";
import { orange, lightBlue } from "@material-ui/core/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import IconList from "./IconList";

const CourtDetails = () => {
  return (
    <div className="background">
      <img className="CourtPic" src="./images/soccer-field_example.jpg"></img>

      <div className="CourtCardBig">
        <h1 id="courtName">Milano Academy</h1>

        {/* TODO: Replace H1 with Typography Material UI */}

        <div className="Rating">
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
          <p className="RatingNum">4.5</p>
          <p className="CourtAdress">· 4291 Rogahn Terrace</p>
        </div>

        <p className="CourtDescription">
          Modern football field, based on the football academy of the AC Milan.
          Open to everyone since 2017. Free amateur friday tournaments.
        </p>
        <div id="buttonList">
          <button className="buttonGreen">Natural Grass</button>
          <button className="buttonGreen">40x70m</button>
          <button className="buttonGreen">Outdoor</button>
        </div>
        <p>POSSIBLE SPORTS</p>
        <IconList />
        <div id="RateIt">
          <p>RATE IT</p>
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
          <FontAwesomeIcon icon={faStar} className="RatingBlue" />
        </div>
        <div className="CourtButtons">
          <Button
            size="small"
            variant="contained"
            type="submit"
            id="buttonLogIn"
          >
            ROUTE{" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" />
          </Button>
          <Button
            size="small"
            variant="contained"
            type="submit"
            id="buttonLogIn"
          >
            CHECK IN{" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourtDetails;
