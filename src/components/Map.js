import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { firestore } from "../firebase";

import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import Geolocation from "@react-native-community/geolocation";

import { GoogleAPIkey } from "../key";
import CourtCard from "./CourtCard";
import IconList from "./IconList";
import "./Home.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { UserContext } from "../providers/UserProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faLocationArrow,
  faSearch,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

Geocode.setApiKey(`${GoogleAPIkey}`);

const containerStyle = {
  width: "100%",
  height: "100vh",
  maxHeight: "736px",
  borderRadius: "20px",
};

{/*
const courtList = [
  {
    id: 1,
    courtName: "Fortuna Street-Soccer",
    courtAddress: "Cecilienallee 81-82, 40474 Düsseldorf",
    location: { lat: 51.248352, lng: 6.761963 },
    courtDescription:
      "Gummibezogenes Feld mit Banden unter der Theodor-Heuss-Brücke mit Gittertoren und Basketballkörben.",
    courtImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i1376cbbf29b3e4c5/version/1565806643/image.jpg",
    courtType: 2,
    courtSurface: 3,
    courtLevelOfLiking: 3,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 2,
    courtName: "Straßenfußball @ Bilker Arcaden",
    courtAddress: "Friedrichstraße 133, 40217 Düsseldorf",
    location: { lat: 51.20795, lng: 6.771762 },
    courtDescription:
      "Gut versteckter, mit feinem Kies aufgeschüttete Fußballplatz hinter den Bilker Arcaden.",
    courtImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/ia253e03231ed0666/version/1565806685/image.jpg",
    courtType: 2,
    courtSurface: 5,
    courtLevelOfLiking: 3,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 3,
    courtName: "Freizeitpark Ulenberg",
    courtAddress: "Ulenbergstraße 11, 40223 Düsseldorf",
    location: { lat: 51.194441, lng: 6.774524 },
    courtDescription:
      "Mehreren Fußballplätzen, einer Torwand sowie Volleyball- und Basketballfeldern. Mit Bänken zum Zuschauen.",
    courtImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i2434a14be6a6bc6f/version/1565808376/image.jpg",
    courtType: 2,
    courtSurface: 3,
    courtLevelOfLiking: 4,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 4,
    courtName: "Merkur Spielarena",
    courtAddress: "Am Staad 11, 40474 Düsseldorf",
    location: { lat: 51.263473, lng: 6.729509 },
    courtDescription:
      "Fußballplatz mit gepflegtem Kunstrasen und makellosen Tornetzen. Sehr voll nach Feierabend. ",
    courtImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i8388ac9853d12026/version/1565807230/image.jpg",
    courtType: 2,
    courtSurface: 0,
    courtLevelOfLiking: 4,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 5,
    courtName: "Kolpingplatz Düsseldorf",
    courtAddress: "Kolpingplatz, 40477 Düsseldorf",
    location: { lat: 51.240414, lng: 6.778698 },
    courtDescription:
      "Öffentlicher Fußballplatz, der viel Raum zum Kicken bietet. Oft leer.",
    courtImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i752be21985706f7b/version/1565808199/image.jpg",
    courtType: 2,
    courtSurface: 5,
    courtLevelOfLiking: 3,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 6,
    courtName: "Basketballplatz hinter Bilk Arcarden",
    courtAddress: "Friedrichstraße 145, 40217 Düsseldorf",
    location: { lat: 51.207883, lng: 6.771127 },
    courtDescription:
      "Hinter den Bilker Arcaden sind zwei eingezäunte Streetball Courts. Körbe nebeneinander Bodenbelag top, sehr einsam. ",
    courtImage:
      "https://lh3.googleusercontent.com/p/AF1QipNYLw3W8GyngGQHof20NxsBMyiffeUGqAMPUhPH=s0",
    courtType: 0,
    courtSurface: 1,
    courtLevelOfLiking: 3,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 7,
    courtName: "Basketball in Derendorf",
    courtAddress: "Spichernpl., 40476 Düsseldorf",
    location: { lat: 51.247552, lng: 6.78402 },
    courtDescription:
      "Basketballplatz am Spichernplatz ideal für ein Fünf gegen Fünf. Bodenbelag insgesamt gut bespielbar. ",
    courtImage:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sea550cef4bf4a774/image/i61eae3cf0c4175ac/version/1553019117/image.jpg",
    courtType: 0,
    courtSurface: 1,
    courtLevelOfLiking: 4,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 8,
    courtName: "Beachvolleyball Nähe Ulenbergpark",
    courtAddress: "Ulenbergstraße 11, 40223 Düsseldorf",
    location: { lat: 51.195485, lng: 6.77488 },
    courtDescription:
      "Beachvolleyball zwischen Skatepark und Freizeitpark Ulenberg. Sandqualität gut! ",
    courtImage:
      "https://lh3.googleusercontent.com/p/AF1QipNFRfHgej4lfj4gR0LabpynneGsOjh-vHDfZ9fF=s0",
    courtType: 4,
    courtSurface: 4,
    courtLevelOfLiking: 4,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
];
*/}


const filteredMarker = [];

const mapOptions = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
};

class Map extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 51.25, lng: 6.78 },
      location: "Düsseldorf",
      zoom: 12,
      CurrentLatitude: 0,
      CurrentLongitude: 0,
      clickedMarkerId: 1,
      Star: [
        "RatingBlue",
        "RatingBlue",
        "RatingBlue",
        "RatingBlue",
        "RatingBlue",
      ],
    };
    this.filterMarker = this.filterMarker.bind(this);
    this.geocodingCity = this.geocodingCity.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.onClickedMarker = this.onClickedMarker.bind(this);
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
    this.mapLoaded = this.mapLoaded.bind(this);
  }

  mapLoaded = () => {
    this.filterMarker();
  };

  filterMarker = () => {
    global.config.courtList.forEach(element => {
      if (element.courtType == (global.config.court.selected.type)) {
        global.config.filteredMarker.push(element);
      }
    });
  };

  geocodingCity = () => {
    Geocode.fromAddress(`${this.state.location}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ center: { lat: lat, lng: lng } });
      },
      (error) => {
        console.error(error);
      }
    );
    return;
  };

  getPosition = () => {
    Geolocation.getCurrentPosition((info) =>
      this.setState(() => ({
        CurrentLatitude: info.coords.latitude,
        CurrentLongitude: info.coords.longitude,
      }))
    );
  };

  locationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  onClickedMarker = (MarkerNumber, MarkerLocation) => {
    this.setState(() => ({
      clickedMarkerId: MarkerNumber,
      clickedMarkerLocation: MarkerLocation,
    }));
    global.config.clickedMarkerId = MarkerNumber;
    this.getPosition();
    this.setState((prevState) => {
      let newStar = prevState.Star;
      for (let i = 0; i < global.config.courtList.length; i++) {
        for (let j = 0; j < 5; j++) {
          if (
            j <
            global.config.courtList[this.state.clickedMarkerId - 1].courtLevelOfLiking + 1
          ) {
            newStar[j] = "RatingOrange";
          } else {
            newStar[j] = "RatingBlue";
          }
        }
      }
      return { Star: newStar };
    });
    global.config.court.detail.name =
      global.config.courtList[this.state.clickedMarkerId - 1].courtName;
    global.config.court.detail.address =
      global.config.courtList[this.state.clickedMarkerId - 1].courtAddress;
    global.config.court.detail.description =
      global.config.courtList[this.state.clickedMarkerId - 1].courtDescription;
    global.config.court.detail.image =
      global.config.courtList[this.state.clickedMarkerId - 1].courtImage;
    global.config.court.detail.type =
      global.config.courtList[this.state.clickedMarkerId - 1].courtType;
    global.config.court.detail.surface =
      global.config.courtList[this.state.clickedMarkerId - 1].courtSurface;
    global.config.court.detail.likeLevel =
      global.config.courtList[this.state.clickedMarkerId - 1].courtLevelOfLiking;
    global.config.court.detail.likedPerson =
      global.config.courtList[this.state.clickedMarkerId - 1].courtNumberOfPersonLiked;
    global.config.court.detail.checkedIn =
      global.config.courtList[this.state.clickedMarkerId - 1].courtCheckedIn;
  };

  setCurrentPosition = () => {
    this.getPosition();
    this.setState({
      center: {
        lat: this.state.CurrentLatitude,
        lng: this.state.CurrentLongitude,
      },
    });
  };

  componentDidMount() {
    this.geocodingCity();
    this.setCurrentPosition();
    this.filterMarker();
  }

  render() {
    return (
      // {!this.context || !this.context.uid ? <Redirect to="signin" /> : ""}

      <div className="background">
        <LoadScript googleMapsApiKey={GoogleAPIkey}>
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={this.state.center}
              zoom={this.state.zoom}
              options={mapOptions}
              onLoad={this.mapLoaded}
            >
              <MarkerClusterer>
                {(clusterer) =>
                    global.config.courtList.map((item) => (
                  //global.config.filteredMarker.map((item) => (
                    <Marker
                      key={item.id}
                      position={item.location}
                      label={item.courtCheckedIn.toString()}
                      icon={
                        item.id == this.state.clickedMarkerId
                          ? `https://img.icons8.com/emoji/48/000000/green-circle-emoji.png`
                          : `https://img.icons8.com/emoji/48/000000/yellow-circle-emoji.png`
                      }
                      clusterer={clusterer}
                      onClick={() =>
                        this.onClickedMarker(item.id, item.location)
                      }
                    />
                  ))
                }
              </MarkerClusterer>

              <div className="searchCity">
                <TextField
                  id="filled-search"
                  label="CITYNAME"
                  variant="outlined"
                  id="searchCity"
                  value={this.state.location}
                  onChange={this.locationChange}
                />

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
                    onClick={this.setCurrentPosition}

                    //   onClick={this.handleSignUpClicked}
                  >
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      className="gotoProfil"
                    />
                  </Button>
                </Link>
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  id="route"
                  onClick={this.setCurrentPosition}

                  //   onClick={this.handleSignUpClicked}
                >
                  <FontAwesomeIcon icon={faRoute} className="gotoProfil" />
                </Button>
              </div>

              <CourtCard
                courtName={global.config.courtList[this.state.clickedMarkerId - 1].courtName}
                courtAddress={
                  global.config.courtList[this.state.clickedMarkerId - 1].courtAddress
                }
                image={global.config.courtList[this.state.clickedMarkerId - 1].courtImage}
                star1={this.state.Star[0]}
                star2={this.state.Star[1]}
                star3={this.state.Star[2]}
                star4={this.state.Star[3]}
                star5={this.state.Star[4]}
              />

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
