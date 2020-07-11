import React, { Component } from "react";
import { firestore } from "../firebase";
import CourtCard from "./CourtCard";

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

const containerStyle = { width: "100%", height: "740px" };

const searchBoxStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px",
};

const buttonStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `100px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "75%",
  marginLeft: "-120px",
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
  }

  render() {
    return (
      <LoadScript googleMapsApiKey={GoogleAPIkey}>
        <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={this.state.center}
            zoom={this.state.zoom}
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
                    onClick={() => this.onClickedMarker(item.id, item.location)}
                  />
                ))
              }
            </MarkerClusterer>
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={searchBoxStyle}
              value={this.state.location}
              onChange={this.locationChange}
            />
            <button style={buttonStyle} onClick={this.adres} />
          </GoogleMap>
        </div>
      </LoadScript>
    );
  }
}

export default Map;
