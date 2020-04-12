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
                this.getLocation();
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

                {this.props.markers.map( marker => { return (
                    <Marker position = {[parseFloat(marker.address[0]), parseFloat(marker.address[1])]}>
                        <Popup>
                            {marker.location}
                        </Popup>
                    </Marker>
                );
                })}

                <LocateControl options={locateOptions} startDirectly />
            </Map>
        )
    }
}