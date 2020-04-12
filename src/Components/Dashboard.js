import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import MapView from './MapView';
import Hamburger from './Hamburger';
import Carousel from './Carousel';
import '../Styles/Dashboard.css';

function Dashboard(){

    let user = useContext(UserContext);

    return(
        <div className='dash-background'>
            <div className='dash-map'>
                <MapView />
            </div>
            <div className="card-holder">
                <h1 className="card-holder-title">STONKS</h1>
                <input type = "text"
                placeholder = "🔎 Search for a product" 
                className = "card-input"
                />
                <Carousel resultCount = {4} />
            </div>
            <div className="hamburger-icon">
                <Hamburger />
            </div>
        </div>
    )
}

export default Dashboard;