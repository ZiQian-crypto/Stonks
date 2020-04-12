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
        </div>
    )
}

export default Dashboard;