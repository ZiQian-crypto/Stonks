import React, { Component } from 'react';
import Geocode from 'react-geocode';
import '../Styles/Carousel.css';

function reverseGeocode(lat, lng) {
    Geocode.setApiKey("AIzaSyDVtxfNIxil5oppS_s3SlMP1Kn0mBnKuAE");
    Geocode.fromLatLng(lat, lng).then( response => {
        let address = response.results[0].formatted_address;
        console.log(address);
        return address;
    }, error => {
        console.log(error)
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default class Carousel extends Component {

    render() {
        const { resultCount, data } = this.props;

        return (
            <div className="result-container">
                <a href="https://www.mustafa.com.sg/" target="_blank">
                    {data.map((supplier) => {
                        return <div className={"card -" + supplier.id}>
                            <div className="card-inner-left">
                                <div className="store-image" style={{ "background-color": getRandomColor() }}></div>
                            </div>
                            <div className="card-inner-right">
                                {/* store details go here */}
                                <div className="store-title">{supplier.name}</div>
                                <div className="store-address">
                                    {supplier.location}
                                </div>
                                <div className="store-response">
                                    {(supplier.currentProduct === null) ? '' : supplier.currentProduct}
                                </div>
                                <div className="store-distance"></div>
                            </div>
                        </div>
                    })}
                </a>
            </div>
        )
    }
}