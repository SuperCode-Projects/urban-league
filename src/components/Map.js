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
<<<<<<< HEAD
        faUser,
        faPlus,
        faLocationArrow,
        faSearch,
        } from "@fortawesome/free-solid-svg-icons";
=======
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
>>>>>>> ed7c125585177f7243d7fe42d950e4475ddde2b8

Geocode.setApiKey(`${GoogleAPIkey}`);

const containerStyle = {
  width: "100%",
  height: "100vh",
  borderRadius: "20px",
};

const courtList = [
<<<<<<< HEAD
                    {id:1, 
                        courtName: "court 1",
                        courtAddress: "Address 1",
                        location: {lat:51.250695, lng:6.789360},
                        courtDescription: "Description 1",
                        courtImage: "https://source.unsplash.com/random/300x200?basketball",
                        courtType: 0,
                        courtSurface: 1,
                        courtLevelOfLiking: 3,
                        courtNumberOfPersonLiked: 0,
                        courtCheckedIn: 0  
                    },
                    {id:2, 
                        courtName: "court 2",
                        courtAddress: "Address 2",
                        location: {lat:51.246486, lng:6.793244},
                        courtDescription: "Description 2",
                        courtImage: "https://source.unsplash.com/random/300x200?football",
                        courtType: 2,
                        courtSurface: 0,
                        courtLevelOfLiking: 1,
                        courtNumberOfPersonLiked: 0,
                        courtCheckedIn: 0  
                    },
                    {id:3, 
                        courtName: "court 3",
                        courtAddress: "Address 3",
                        location: {lat:51.248089, lng:6.774877},
                        courtDescription: "Description 3",
                        courtImage: "https://source.unsplash.com/random/300x200?basketball",
                        courtType: 0,
                        courtSurface: 1,
                        courtLevelOfLiking: 2,
                        courtNumberOfPersonLiked: 0,
                        courtCheckedIn: 0  
                    },
                ];

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
                        Star : ["RatingBlue",
                                "RatingBlue",
                                "RatingBlue",
                                "RatingBlue",
                                "RatingBlue"],
                    };
        this.geocodingCity = this.geocodingCity.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.onClickedMarker = this.onClickedMarker.bind(this);
        this.setCurrentPosition = this.setCurrentPosition.bind(this);
    }
=======
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
    courtName: "court 2",
    courtAddress: "Address 2",
    location: { lat: 51.246486, lng: 6.793244 },
    courtDescription: "Description 2",
    courtImage: "https://source.unsplash.com/random/300x200?football",
    courtType: 2,
    courtSurface: 0,
    courtLevelOfLiking: 1,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
  {
    id: 3,
    courtName: "court 3",
    courtAddress: "Address 3",
    location: { lat: 51.248089, lng: 6.774877 },
    courtDescription: "Description 3",
    courtImage: "https://source.unsplash.com/random/300x200?basketball",
    courtType: 0,
    courtSurface: 1,
    courtLevelOfLiking: 2,
    courtNumberOfPersonLiked: 0,
    courtCheckedIn: 0,
  },
];

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
    this.locationChange = this.locationChange.bind(this);
    this.geocodingCity = this.geocodingCity.bind(this);
    this.onClickedMarker = this.onClickedMarker.bind(this);
  }

  locationChange = (event) => {
    this.setState({ location: event.target.value });
    this.getPosition = this.getPosition.bind(this);
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
  };
>>>>>>> ed7c125585177f7243d7fe42d950e4475ddde2b8

    geocodingCity = () => {
        Geocode.fromAddress(`${this.state.location}`).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({ center: { lat: lat, lng: lng } });
            },
        (error) => {
        console.error(error);
        });
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
        this.getPosition = this.getPosition.bind(this);
        this.setCurrentPosition = this.setCurrentPosition.bind(this);
    };

<<<<<<< HEAD
    onClickedMarker = (MarkerNumber, MarkerLocation) => {
        this.setState(() => ({
            clickedMarkerId: MarkerNumber,
            clickedMarkerLocation: MarkerLocation,
        }));
        this.getPosition();
        this.setState(prevState =>{
            let newStar = prevState.Star
                for (let i=0; i<courtList.length; i++) {
                    for (let j=0; j<5; j++) {
                        if (j<courtList[this.state.clickedMarkerId-1].courtLevelOfLiking + 1){
                            newStar[j] = "RatingOrange";
                        } else {
                            newStar[j] = "RatingBlue";
                        } 
                    }
                }
                return { Star : newStar };
            }
        );
    };
=======
    this.setState((prevState) => {
      let newStar = prevState.Star;
      for (let i = 0; i < courtList.length; i++) {
        for (let j = 0; j < 5; j++) {
          console.log(this.state.clickedMarkerId);
          if (
            j <
            courtList[this.state.clickedMarkerId - 1].courtLevelOfLiking + 1
          ) {
            newStar[j] = "RatingOrange";
          } else {
            newStar[j] = "RatingBlue";
          }
        }
      }
      console.log(newStar);
      console.log(this.state.Star);
      return { Star: newStar };
    });
  };
>>>>>>> ed7c125585177f7243d7fe42d950e4475ddde2b8

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
    }

    render() {
        return (
            // {!this.context || !this.context.uid ? <Redirect to="signin" /> : ""}

<<<<<<< HEAD
        <div className="background">
            <LoadScript googleMapsApiKey={GoogleAPIkey}>
            <div>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    options={mapOptions}
                >
                <MarkerClusterer>
                    {(clusterer) =>
                        courtList.map((item) => (
                            <Marker
                                key={item.id}
                                position={item.location}
                                label={item.courtCheckedIn.toString()}
                                icon={ (item.id == this.state.clickedMarkerId) ? 
                                    (`https://img.icons8.com/emoji/48/000000/green-circle-emoji.png`):
                                    (`https://img.icons8.com/emoji/48/000000/yellow-circle-emoji.png`)}
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
=======
      <div className="background">
        <LoadScript googleMapsApiKey={GoogleAPIkey}>
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={this.state.center}
              zoom={this.state.zoom}
              options={mapOptions}
            >
              <MarkerClusterer>
                {(clusterer) =>
                  courtList.map((item) => (
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
>>>>>>> ed7c125585177f7243d7fe42d950e4475ddde2b8
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
                </div>

<<<<<<< HEAD
                <CourtCard
                    courtName={courtList[this.state.clickedMarkerId - 1].courtName}
                    courtAddress={courtList[this.state.clickedMarkerId - 1].courtAddress}
                    image={courtList[this.state.clickedMarkerId - 1].courtImage}
                    star1={this.state.Star[0]}
                    star2={this.state.Star[1]}
                    star3={this.state.Star[2]}
                    star4={this.state.Star[3]}
                    star5={this.state.Star[4]}
                />
              
                {/* <Time /> */}

                <div id="divIconList">
                    <IconList/>
                </div>
=======
                    //   onClick={this.handleSignUpClicked}
                  >
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      className="gotoProfil"
                    />
                  </Button>
                </Link>
              </div>
              <CourtCard
                courtName={courtList[this.state.clickedMarkerId - 1].courtName}
                courtAddress={
                  courtList[this.state.clickedMarkerId - 1].courtAddress
                }
                image={courtList[this.state.clickedMarkerId - 1].courtImage}
                star1={this.state.Star[0]}
                star2={this.state.Star[1]}
                star3={this.state.Star[2]}
                star4={this.state.Star[3]}
                star5={this.state.Star[4]}
              />
              {/* <Time /> */}
>>>>>>> ed7c125585177f7243d7fe42d950e4475ddde2b8

                </GoogleMap>
            </div>
            </LoadScript>
        </div>
    );}}

export default Map;
