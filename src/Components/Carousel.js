import React, { Component } from 'react';
import Geocode from 'react-geocode';
import '../Styles/Carousel.css';

function reverseGeocode(lat, lng) {
    Geocode.setApiKey("AIzaSyDVtxfNIxil5oppS_s3SlMP1Kn0mBnKuAE");
    Geocode.fromLatLng(lat, lng).then( response => {
        const address = response.results[0].formatted_address;
        console.log(address);
        return address;
    }, error => {
        console.log(error)
    });
    return "hello";
}

export default class Carousel extends Component {

    render() {
        const { resultCount, data } = this.props;

        return (
            <div className="result-container">
                    {data.map((supplier) => {
                        return <div className={"card -" + supplier.id}>
                            <div className="card-inner-left"></div>
                            <div className="card-inner-right">
                                {/* store details go here */}
                                <div className="store-title">{supplier.name}</div>
                                <div className="store-address">
                                    {(supplier.currentProduct === null)? '' : supplier.currentProduct}
                                </div>
                                <div className="store-response">
                                    { reverseGeocode(supplier.address[0], supplier.address[1]) }
                                </div>
                                <div className="store-distance"></div>
                            </div>
                        </div>
                    })}
            </div>
        )
    }
}