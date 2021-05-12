import React from 'react'

export default function SearchBar({handleSearch}) {
    return (
        <div className="search-bar-container">
            <label htmlFor="searchBar" className="search-bar-container__search-bar-label">Search For Recipes</label>
            <input id="searchBar" type="text" 
                className="search-bar-container__search-bar" 
                onChange={e => handleSearch(e.target.value)}></input>
        </div>
    )
}
