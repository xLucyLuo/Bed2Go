import React from 'react';
import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';
import FilterForm from './filter_form'

const Search = ({ listings, updateFilter, minPrice, maxPrice }) => {
    return (
        <div>
            <h1>Search Page</h1>
            <FilterForm updateFilter={updateFilter} minPrice={minPrice} maxPrice={maxPrice}/>
            <ListingIndex listings={listings}/>
            <ListingMap listings={listings} updateFilter={updateFilter} />
        </div>

    );
};

export default Search;

