import React, { Component } from 'react';
import { firestore } from "../firebase";

import { GoogleMap, LoadScript, Marker, MarkerClusterer, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';
import { GoogleAPIkey } from '../key';
import Geocode from "react-geocode";
import Geolocation from '@react-native-community/geolocation';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 51.25, lng: 6.78},
            location : "Düsseldorf",
            zoom : 12,
        }
    }
    render() {
        return (
            <LoadScript googleMapsApiKey={GoogleAPIkey}>
                <div>
                    <GoogleMap mapContainerStyle={containerStyle} center={this.state.center} zoom={this.state.zoom}>
                        <MarkerClusterer>
                            {clusterer =>
                                courtList.map(item => (
                                    <Marker
                                        key={item.id}
                                        position={item.location}
                                        label={item.courtName}
                                        icon={URL=`https://img.icons8.com/emoji/48/000000/${item.color}-circle-emoji.png`}
                                        clusterer={clusterer}
                                        onClick={() => this.onClickedMarker(item.id, item.location)}
                                    />
                                ))
                            }
                        </MarkerClusterer>
                        <input type="text" placeholder="Customized your placeholder" style={searchBoxStyle} value={this.state.location} onChange={this.locationChange}/>
                        <button style={buttonStyle} onClick={this.adres}/>            
                    </GoogleMap>
                </div>
        </LoadScript>
        );
    }
}

export default Map;