import React, { Component } from 'react';
import { 
    Map,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import '../Styles/MapView.css';
import LocateControl from './LocateControl';

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latit = position.coords.latitude;
            var longit = position.coords.longitude;
            console.log(latit);
            console.log(longit);
        });
    }

    console.log("this works");
}

export default class MapView extends Component {
    state = {
        lat: 1.29,
        lng: 103.81,
        zoom: 13,
    }

    render() {
        const locateOptions = {
            position: 'topleft',
            flyTo: true,
            cacheLocation: true,
            strings: {
                title: 'Enable Location',
            },
            onActivate: () => {
                getLocation();
            }
        }
        const position = [this.state.lat, this.state.lng]
        console.log(this.state.lat);
        console.log(this.state.lng);


        return(
            <Map center={position} zoom={this.state.zoom} className="map">
                <TileLayer
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                    url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <LocateControl options={locateOptions} startDirectly />
            </Map>
        )
    }
}