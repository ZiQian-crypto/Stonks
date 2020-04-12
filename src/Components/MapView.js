import React, { Component } from 'react';
import { 
    Map,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import '../Styles/MapView.css';

export default class MapView extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return(
<<<<<<< HEAD
            <Map center={position} zoom={this.state.zoom} style={{ "width": "100 vw", "height": "100 vw", }}>
=======
            <Map center={position} zoom={this.state.zoom} className="map">
>>>>>>> 531f51fcffbfed72528282c349da625680a9309a
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}