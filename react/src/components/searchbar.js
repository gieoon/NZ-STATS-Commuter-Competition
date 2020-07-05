import React, {} from 'react';
import search from '../assets/search.svg';
import Search from './search';

function SearchBar({
    centroidData
}) {
    return(
        <React.Fragment>
            {/* <div className="SearchBar">
                <input type="text" />
                <img src={search} className="search-img" />
            </div> */}

            <Search centroidData={centroidData} />
        </React.Fragment>
    )
}

export default SearchBar;
