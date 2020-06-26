import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function LeftPanel(props){
    
    
    return(
        <div className="LeftPanel">
            <div className="title"> 
                <Link
                    to="/"
                    // onClick={() => {
                    //     setExpand(false);
                    // }}
                    >
                    Commute in
                    <br />
                    <span> New Zealand</span>
                    </Link>
            </div>
            <div className="map-stats">

            </div>

        </div>
    )
}

export default LeftPanel