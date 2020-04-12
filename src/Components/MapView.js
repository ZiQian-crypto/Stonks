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
        lat: 1.29,
        lng: 103.85,
        zoom: 13,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return(
            <Map center={position} zoom={this.state.zoom} className="map">
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