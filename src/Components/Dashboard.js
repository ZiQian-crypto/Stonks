import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Providers/UserProvider';
import { firestore } from '../Firebase';
import MapView from './MapView';
import Carousel from './Carousel';
import '../Styles/Dashboard.css';

let allData = [];

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

    let [ renderList, setRenderList ] = useState(allData);

    const narrowSearchResults = (event) => {
        let s = event.target.value;
        let reg = new RegExp(s);
        let newRenderList = [];
        for(let i = 0; i < allData.length; i++){
            let found = false;

            for(let j = 0; j < allData[i].products.length; j++){
                if(reg.test(allData[i].products[j].name) === true){
                    found = true;
                    break;
                }
            }

            if(found){
                newRenderList = [...newRenderList, allData[i]];
            }
        }
       
        setRenderList(newRenderList);
        console.log(newRenderList);
    }

    useEffect(() => async function func(){getData()});
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
                onChange={e => narrowSearchResults(e)}
                />
                <Carousel resultCount = {renderList.length} data={renderList} />
            </div>
        </div>
    )
}

export default Dashboard;