import React from "react";
import Button from "@material-ui/core/Button";

import "./CourtDetails.css";
import { orange, lightBlue } from "@material-ui/core/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import IconList from "./IconList";
import { Link } from "react-router-dom";

const CourtDetails = () => {
  return (
    <div className="background">
      <img
        className="CourtPic"
        src="./images/Fussballplatz-Vagedesstrasse.png"
      ></img>

      <div className="CourtCardBig">
        <Button
          size="small"
          variant="contained"
          type="submit"
          id="buttonPlayer"
        >
          Player 0
        </Button>
        <h1 id="courtName">Fußballplatz Vagedesstraße</h1>

        {/* TODO: Replace H1 with Typography Material UI */}

        <div className="Rating">
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
          <p className="RatingNum">4.5</p>
          <p className="CourtAdress">Vagedesstraße 21, 40479 Düsseldorf</p>
        </div>

        <p className="CourtDescription">
          Netter kleiner Fußballplatz mit hohem Zaun und zwei Metall-Toren.
          Wiese drum herum und Parkmöglichkeiten.
        </p>
        <div id="buttonList">
          <button className="buttonGreen">Gravel field</button>
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
          <Link to="/">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="buttonCheckIn"
            >
              BACK{" "}
              <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Arrow" />
            </Button>
          </Link>
          <Link to="/">
            <Button
              size="small"
              variant="contained"
              type="submit"
              id="buttonCheckIn"
            >
              CHECK IN{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="Arrow" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourtDetails;
