import React from 'react';
import ListingIndex from './../listings/listing_index';
import ListingMap from './../listings/listing_map';



class Search extends React.Component{
    render() {
        const { listings, updateFilter, bounds, openModal } = this.props
        return (
            <div className="search-component">
                {/* <h1>Search Page</h1> */}
                <div className="search-list-view">
                    <header className="search-list-view-header"> 
                        <h3>{`${listings.length} stays`}</h3>
                        {/* <FilterForm updateFilter={updateFilter} minPrice={minPrice} maxPrice={maxPrice}/> */}
                        <button className="open-filter-modal-button" onClick={() => openModal("filter")}>
                        <i className="fas fa-sliders-h"></i>
                            Filter
                        </button>
                    </header>
                    <ListingIndex listings={listings}/>
                </div>
                <div className="search-map-view">
                    <ListingMap listings={listings} updateFilter={updateFilter} bounds={bounds}/>
                </div>
            </div>
    
        );
    };
}

export default Search;

