import React, { Component } from 'react';
import { 
    Map,
    TileLayer,
} from 'react-leaflet';

export default class MapView extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        
        return(
            <p>Testing</p>
        )
    }
}