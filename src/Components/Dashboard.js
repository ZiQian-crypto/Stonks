import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Providers/UserProvider';
import { firestore } from '../Firebase';
import MapView from './MapView';
import Carousel from './Carousel';
import '../Styles/Dashboard.css';
import Logo from '../img/logo.png';

let allData = [];

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

async function getData() {
    const data = await firestore.collection('stores')
    data.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
            tempDoc.push({
                id: doc.id,
                ...doc.data()
            })
        })
        allData = tempDoc;
    })
}

function Dashboard(){

    let [renderList, setRenderList] = useState(allData);

    const narrowSearchResults = (event) => {
        let s = event.target.value.toLowerCase();
        let reg = new RegExp(s);
        let reg2 = new RegExp(s.charAt(0).toUpperCase() + s.slice(1));
        let newRenderList = [];
        for (let i = 0; i < allData.length; i++) {
            let found = false;

            for (let j = 0; j < allData[i].products.length; j++) {
                if (reg.test(allData[i].products[j].name) === true || reg2.test(allData[i].products[j].name) === true) {
                    found = true;
                    allData[i].currentProduct = allData[i].products[j].name;
                }

            }

            if (found) {
                newRenderList = [...newRenderList, allData[i]];
            }
        }

        if(s === ''){
            setRenderList([]);
        } else {
            setRenderList(newRenderList)
        }
        console.log(renderList);
    }

    useEffect(() => async function func() { getData() });
    let user = useContext(UserContext);

    return (
        <div className='dash-background'>
            <div className='dash-map'>
                <MapView markers={renderList} />
            </div>
            <div className="card-holder">
                <img className="card-holder-logo" src={Logo} />
                <input type="text"
                    placeholder = "🔎 Search for something!"
                    className="card-input"
                    onChange={e => narrowSearchResults(e)}
                />
                <Carousel resultCount={renderList.length} data={renderList} />
            </div>
        </div>
    )
}

export default Dashboard;