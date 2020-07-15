import React from "react";
import "./CourtCard.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const CourtCard = (props) => {
  return (
    <div
      className="CourtCardDiv"
      visibility={global.config.clickedMarkerId === 0 ? "hidden" : "visible"}
    >
      <img className="CourtPicSmall" src={`${props.image}`} alt="bild"></img>

      <div className="CourtCardDescription">
        <h3>{props.courtName}</h3>
        <p>{props.courtAddress}</p>
        <div id="RateIt">
          <FontAwesomeIcon icon={faStar} className={`${props.star1}`} />
          <FontAwesomeIcon icon={faStar} className={`${props.star2}`} />
          <FontAwesomeIcon icon={faStar} className={`${props.star3}`} />
          <FontAwesomeIcon icon={faStar} className={`${props.star4}`} />
          <FontAwesomeIcon icon={faStar} className={`${props.star5}`} />
        </div>
        <Link to="/courtdetails">
          <Button
            size="small"
            variant="contained"
            type="submit"
            id="buttonDetails"
            disabled={global.config.clickedMarkerId === 0 ? true : false}
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
