import React from 'react';

function Hamburger(){
    return (
        <div>
            <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20" style={{fill: "white"}}></rect>
                <rect y="30" width="100" height="20" style={{fill: "white"}}></rect>
                <rect y="60" width="100" height="20" style={{fill: "white"}}></rect>
            </svg>
        </div>
    )
}

export default Hamburger;