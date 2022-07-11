import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component{
    componentDidMount(){
        this.props.fetchListings();
    };

    render(){
        if(!this.props.listings){
            return <div></div>
        }

        return (
            <div>
                <h1>Listings</h1>
                {this.props.listings.map((listing) => <ListingIndexItem key={listing.id} listing={listing} />)}
            </div>
        )
    };
};

export default ListingIndex;

