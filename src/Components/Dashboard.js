import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import '../Styles/Dashboard.css';

function Dashboard(){

    let user = useContext(UserContext);

    return(
        <div className='dash-background'>
           <span>Stuff</span> 
        </div>
    )
}

export default Dashboard;