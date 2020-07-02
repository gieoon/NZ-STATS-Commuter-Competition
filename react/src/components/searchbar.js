import React, {} from 'react';
import search from '../assets/search.svg';

function SearchBar({

}) {
    return(
        <div className="SearchBar">
            <input type="text" />
            <img src={search} className="search-img" />
        </div>
    )
}

export default SearchBar;
