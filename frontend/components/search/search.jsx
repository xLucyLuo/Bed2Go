import React from 'react';
import ListingIndex from './../listings/listing_index';
import ListingMap from './../listings/listing_map';
import FilterForm from './filter_form'

class Search extends React.Component{
    render() {
        const { listings, updateFilter, minPrice, maxPrice } = this.props
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
}

export default Search;

