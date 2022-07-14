import React from 'react';
import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';
import FilterForm from './filter_form'

const Search = ({ listings, updateFilter, minPrice, maxPrice }) => {
    return (
        <div className="search-component">
            {/* <h1>Search Page</h1> */}
            <div className="search-list-view">
                <FilterForm updateFilter={updateFilter} minPrice={minPrice} maxPrice={maxPrice}/>
                <ListingIndex listings={listings}/>
            </div>
            <div className="search-map-view">
                <ListingMap listings={listings} updateFilter={updateFilter} />
            </div>
        </div>

    );
};

export default Search;

