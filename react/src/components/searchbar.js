import React, {} from 'react';
import search from '../assets/search.svg';
import Search from './search';

function SearchBar({
    allCentroidDestinations,
    setClickedData,
    mapRef,
}) {
    return(
        <React.Fragment>
            {/* <div className="SearchBar">
                <input type="text" />
                <img src={search} className="search-img" />
            </div> */}

            <Search 
                allCentroidDestinations={allCentroidDestinations} 
                setClickedData={setClickedData} 
                mapRef={mapRef}
            />
        </React.Fragment>
    )
}

export default SearchBar;
