import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function LeftPanel(props){
    
    
    return(
        <div className="leftPanel Navbar">
            <div className="navbar-middle"> 
                <Link
                    to="/"
                    // onClick={() => {
                    //     setExpand(false);
                    // }}
                    >
                    Commute
                    {/* <br /> */}
                    <span> New Zealand</span>
                    </Link>
            </div>

        </div>
    )
}

export default LeftPanel