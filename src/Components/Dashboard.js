import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import MapView from './MapView';
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
            </div>
        </div>
    )
}

export default Dashboard;