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

const courtSurface = ["Artificial Grass", "Concrete", "Natural Grass", "Rubber", "Sand", "Other"]
const courtType = ["Basketball", "Dart", "Football", "Tennis", "Volleyball"]


// {global.config.court.detail.type}
  
  
//  {global.config.court.detail.likeLevel
//  {global.config.court.detail.likedPerson


const CourtDetails = () => {
  return (
    <div className="background">
      <img
        className="CourtPic"
        src={global.config.court.detail.image}
      ></img>

      <div className="CourtCardBig">
        <Button
          size="small"
          variant="contained"
          type="submit"
          id="buttonPlayer"
        >
          {global.config.court.detail.checkedIn}
        </Button>
        <h1 id="courtName">{global.config.court.detail.name}</h1>

        {/* TODO: Replace H1 with Typography Material UI */}

        <div className="Rating">
          <FontAwesomeIcon icon={faStar} className="RatingOrange" />
          <p className="RatingNum">4.5</p>
          <p className="CourtAdress">{global.config.court.detail.address}</p>
        </div>

        <p className="CourtDescription">
        {global.config.court.detail.description}
        </p>
        <div id="buttonList">
          <button className="buttonGreen">{courtSurface[`${global.config.court.detail.surface}`]}</button>
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
