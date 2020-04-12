import React, { Component } from 'react';
import '../Styles/Carousel.css';

export default class Carousel extends Component {

    render() {
        const { resultCount } = this.props;
        let carousel = []

        for (let i = 0; i < resultCount; i++) {
            carousel.push(
                <div className="card">
                    <div className="card-inner-left">
                    {/* store img goes here */}
                    </div>
                    <div className="card-inner-right">
                    {/* store details go here */}
                    <div className="store-title"></div>
                    <div className="store-address"></div>
                    <div className="store-response"></div>
                    <div className="store-distance"></div>
                    </div>
                </div>
            )
        }

        return (
            <div className="result-container">
                {carousel}
            </div>
        )
    }
}