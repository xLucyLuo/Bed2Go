import React from 'react';
import ListingIndexItem from './listing_index_item';

const ListingIndex = ({ listings }) => {
    if (!listings) {return null;}

    return (
        <div className="listing-index" >
            {listings.map((listing) => <ListingIndexItem key={listing.id} listing={listing} />)}
        </div>
    );
};

export default ListingIndex;

