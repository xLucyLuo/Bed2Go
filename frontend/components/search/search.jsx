import React from 'react';
import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';

const Search = ({ listings, fetchListings, updateFilter }) => {
    return (
        <div>
            <h1>Search Page</h1>
            <ListingIndex listings={listings} fetchListings={fetchListings}/>
            <ListingMap listings={listings} updateFilter={updateFilter} />
        </div>

    );
};

export default Search;

