import React, { Component } from 'react';
import { 
    Map,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import '../Styles/MapView.css';
import LocateControl from './LocateControl';

export default class MapView extends Component {
<<<<<<< HEAD
    state = {
        lat: 1.29,
        lng: 103.81,
        zoom: 13,
=======
    
    constructor(props){
        super(props);
        this.state = {
            lat: 1.29,
            lng: 103.81,
            zoom: 13,
        }

        this.getLocation = this.getLocation.bind(this);
    }

    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latit = position.coords.latitude;
                var longit = position.coords.longitude;
                this.setState({lat: latit, lng: longit});
            });
        }
>>>>>>> e0a869d3eeec8b91fe74bd7fd59fda3210c9c136
    }

    render() {
        const locateOptions = {
            position: 'topleft',
            flyTo: true,
            cacheLocation: true,
            strings: {
                title: 'Enable Location',
            },
<<<<<<< HEAD
            onActivate: () => {}
=======
            onActivate: () => {
                this.getLocation();
            }
>>>>>>> e0a869d3eeec8b91fe74bd7fd59fda3210c9c136
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

                <LocateControl options={locateOptions} startDirectly />
            </Map>
        )
    }
}