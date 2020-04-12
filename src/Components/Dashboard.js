import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import { firestore } from '../Firebase';
import MapView from './MapView';
import Carousel from './Carousel';
import '../Styles/Dashboard.css';

async function getData() {
    const data = await firestore.collection('events')
    data.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
            tempDoc.push({
                id: doc.id,
                ...doc.data()
            })
        })
        console.log(tempDoc)
    })
}

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
                <Carousel resultCount = {10} />
<<<<<<< HEAD
            </div>
            <div className="hamburger-icon">
                <Hamburger />
=======
>>>>>>> 076ea6016b2a136928fbe42c6c2915f175223def
            </div>
        </div>
    )
}

export default Dashboard;