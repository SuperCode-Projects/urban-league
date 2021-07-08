import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import CourtConsumer from "../CourtProvider";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faLocationArrow,
  faSearch,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { clickedMarkerId, courtList } from "../config";

Geocode.setApiKey(`${GoogleAPIkey}`);

const containerStyle = {
  width: "100%",
  height: "100vh",
  maxHeight: "736px",
  borderRadius: "20px",
};

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
      clickedMarkerLocation : "",
      Star: [
        "RatingBlue",
        "RatingBlue",
        "RatingBlue",
        "RatingBlue",
        "RatingBlue",
      ],
      travelMode: 'DRIVING',
      origin: '',
      destination: 'Düsseldorf',
      response: null,
    };
    this.filterMarker = this.filterMarker.bind(this);
    this.geocodingCity = this.geocodingCity.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.locationChange = this.locationChange.bind(this);
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

//  sendMarkerID = (dispatch) => {
//    console.log(this.state.clickedMarkerId);
//    setTimeout(async() => {
//      dispatch({type : "CLICKED_MARKER",payload: this.state.clickedMarkerId})
//    }, 1000);
//  }
//
  getMarkerID = (MarkerNumber, MarkerLocation) => {
    this.setState({clickedMarkerId: MarkerNumber}, () => {console.log(this.state.clickedMarkerId)});
    this.setState({clickedMarkerLocation: MarkerLocation}, () => {console.log(this.state.clickedMarkerLocation)});
    console.log(this.state.CurrentLatitude, this.state.CurrentLongitude)
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

  getPosition = () => {
    Geolocation.getCurrentPosition(info => (this.setState(() => ({CurrentLatitude : info.coords.latitude, CurrentLongitude : info.coords.longitude}))));
} //coppied


directionsCallback = (response) => {
    console.log(response)

    if (response !== null) {
        if (response.status === 'OK') {
            this.setState(
                () => ({
                    response
                })
            )
        } else {
            console.log('response: ', response)
        }
    }
}

checkDriving = ({ target: { checked } }) => {
    checked &&
        this.setState(
            () => ({
                travelMode: 'DRIVING'
            })
        )
}

checkBicycling = ({ target: { checked } }) => {
    checked &&
        this.setState(
            () => ({
                travelMode: 'BICYCLING'
            })
        )
  }

checkTransit = ({ target: { checked } }) => {
    checked &&
        this.setState(
            () => ({
                travelMode: 'TRANSIT'
        })
    )
}

checkWalking = ({ target: { checked } }) => {
    checked &&
        this.setState(
            () => ({
                travelMode: 'WALKING'
        })
    )
}

getOrigin = (ref) => {
    this.origin = ref
}

getDestination =(ref) => {
    this.destination = ref
}

onClickedRoute = () => {
    
    if (this.state.clickedMarker !== 0) {
        this.setState(
            () => ({
                origin: this.state.CurrentLatitude.toString() + "," + this.state.CurrentLongitude.toString(),
                destination: this.state.clickedMarkerLocation
            })
        )
    }
    console.log("origin: ", this.state.origin, "destination", this.state.destination);
}

onMapClick = (...args) => {
    console.log('onClick args: ', args)
}

adres = () => { //coppied
  Geocode.fromAddress(`${this.state.location}`).then(
      response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(response.results);
          console.log(`${this.state.location}`);
          this.setState({center: {lat: lat, lng: lng}})
      },
      error => {
          console.error(error);
      }
  );
  return;
}

locationChange = (event) => { //coppied
  this.setState({location: event.target.value});
}

  componentDidMount() {
    this.geocodingCity();
    this.setCurrentPosition();
    this.filterMarker();
  }

  render(){
    return (
      <CourtConsumer>
        {
          value => {
            const { dispatch, courtList} = value;
            return (
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
                            {
                                (
                                    this.state.destination !== '' &&
                                    this.state.origin !== ''
                                ) && (
                                    <DirectionsService
                                        options={{ 
                                                    destination: this.state.destination,
                                                    origin: this.state.origin,
                                                    travelMode: this.state.travelMode
                                                }}
                                        callback={this.directionsCallback}
                                    />
                                )
                            }
                            {
                                this.state.response !== null && (
                                    <DirectionsRenderer
                                        options={{ 
                                            directions: this.state.response
                                        }}
                                    />
                                )
                            }
                      <MarkerClusterer>
                        {(clusterer) =>
                          courtList.map((item) => (
                          //global.config.courtList.map((item) => (
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
                              onClick={() => {
                                //this.onClickedMarker(item.id, item.location)
                                this.getMarkerID(item.id, item.location);
                                //this.sendMarkerID.bind(this, dispatch) 
                              }
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
                              onClick={this.onClickedRoute}
                            />
                          </Button>
                        </Link>
                        <Button
                          size="small"
                          variant="contained"
                          type="submit"
                          id="route"
                          onClick={this.onClickedRoute}
        
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
      </CourtConsumer>
    );
  };
}

export default Map;
