import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import '../Styles/Carousel.css';

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
                                <div className="store-address">{(supplier.currentProduct === null)? '' : supplier.currentProduct}</div>
                                <div className="store-response"></div>
                                <div className="store-distance"></div>
                            </div>
                        </div>
                    })}
            </div>
        )
    }
}