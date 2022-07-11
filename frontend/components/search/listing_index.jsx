import React from 'react';
import ListingIndexItem from './listing_index_item';

const ListingIndex = ({ listings }) => {
    if (!listings) {
        return <div></div>
    }

    return (
        <div>
            <h1>Listings</h1>
            {listings.map((listing) => <ListingIndexItem key={listing.id} listing={listing} />)}
        </div>
    );
};

export default ListingIndex;

