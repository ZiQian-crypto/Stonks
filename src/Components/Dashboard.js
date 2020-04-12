import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import MapView from './MapView';
import '../Styles/Dashboard.css';

function Dashboard(){

    let user = useContext(UserContext);

    return(
        <div className='dash-background'>
<<<<<<< HEAD
            <div className='dash-map'>
                <MapView />
=======
            <div className="card-holder">
                <h1 className="card-holder-title">STONKS</h1>
>>>>>>> c9ff6dc3b65114b04e8fd337d39d2bb3a505e5d5
            </div>
        </div>
    )
}

export default Dashboard;