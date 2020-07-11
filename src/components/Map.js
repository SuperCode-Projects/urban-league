import React, { Component } from "react";
import { firestore } from "../firebase";
import CourtCard from "./CourtCard";

import IconList from "./IconList";

import "./Home.css";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";

import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faLocationArrow,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { GoogleAPIkey } from "../key";
import Geocode from "react-geocode";
import Geolocation from "@react-native-community/geolocation";

Geocode.setApiKey(`${GoogleAPIkey}`);

const containerStyle = {
  width: "100%",
  height: "100vh",
  borderRadius: "20px",
};

const courtList = [
  {
    id: 1,
    courtName: "1",
    location: { lat: 51.250695, lng: 6.78936 },
    color: "green",
    courtSize: " ",
    checkedIn: 0,
    courtAddress: "",
  },
  {
    id: 2,
    courtName: "2",
    location: { lat: 51.246486, lng: 6.793244 },
    color: "red",
  },
  {
    id: 3,
    courtName: "3",
    location: { lat: 51.248089, lng: 6.774877 },
    color: "blue",
  },
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 51.25, lng: 6.78 },
      location: "Düsseldorf",
      zoom: 12,
    };
    this.locationChange = this.locationChange.bind(this);
    this.geocodingCity = this.geocodingCity.bind(this);
  }

  locationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  geocodingCity = () => {
    Geocode.fromAddress(`${this.state.location}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(response.results);
        console.log(`${this.state.location}`);
        this.setState({ center: { lat: lat, lng: lng } });
      },
      (error) => {
        console.error(error);
      }
    );
    return;
  };

  componentDidMount() {
    this.geocodingCity();
  }

  render() {
    return (
      <div className="background">
        {/* {!this.context || !this.context.uid ? <Redirect to="signin" /> : ""} */}
        <LoadScript googleMapsApiKey={GoogleAPIkey}>
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={this.state.center}
              zoom={this.state.zoom}
              disableDefaultUI={true}
              scaleControl={false}
            >
              <MarkerClusterer>
                {(clusterer) =>
                  courtList.map((item) => (
                    <Marker
                      key={item.id}
                      position={item.location}
                      label={item.courtName}
                      icon={
                        (URL = `https://img.icons8.com/emoji/48/000000/${item.color}-circle-emoji.png`)
                      }
                      clusterer={clusterer}
                      onClick={() =>
                        this.onClickedMarker(item.id, item.location)
                      }
                    />
                  ))
                }
              </MarkerClusterer>
              {/* <input
                type="text"
                placeholder="Customized your placeholder"
                style={searchBoxStyle}
                value={this.state.location}
                onChange={this.locationChange}
              /> */}
              <div className="searchCity">
                <TextField
                  id="filled-search"
                  label="CITYNAME"
                  variant="outlined"
                  id="searchCity"
                  value={this.state.location}
                  onChange={this.locationChange}
                />

                {/* <button style={buttonStyle} onClick={this.geocodingCity} /> */}

                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  id="searchButton"
                  onClick={this.geocodingCity}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>

              <div id="Homebuttons">
                {" "}
                <Link to="/account">
                  <Button
                    size="small"
                    variant="contained"
                    type="submit"
                    id="gotoAccount"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Button>
                </Link>
                <Link to="/addcourt">
                  <Button
                    size="small"
                    variant="contained"
                    type="submit"
                    id="addCourtButton"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </Link>
                <Link to="#">
                  <Button
                    size="small"
                    variant="contained"
                    type="submit"
                    id="myLocation"

                    //   onClick={this.handleSignUpClicked}
                  >
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      className="gotoProfil"
                    />
                  </Button>
                </Link>
              </div>
              <CourtCard />
              {/* <Time /> */}

              <div id="divIconList">
                <IconList />
              </div>
            </GoogleMap>
          </div>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
