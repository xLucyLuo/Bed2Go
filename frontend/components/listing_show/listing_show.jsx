import React from 'react';
import ListingMap from '../listing_map/listing_map';

class ListingShow extends React.Component {
    componentDidMount() {
        const { listingId, updateFilter } = this.props;
        updateFilter("listingId", listingId);
        // debugger
    };

    componentWillUnmount() {
        const { clearFilter } = this.props;
        clearFilter("listingId");
        // debugger
    };

    render() {
        const { listing, listingId, updateFilter } = this.props;
        
        if (!listing) {return null;}

        const { 
            title, 
            averageRating,
            numReviews, 
            typeOfPlace, 
            propertyType,
            city,
            state,
            country,
            hostName,
            maxGuests,
            numBedrooms,
            numBeds,
            numBaths,
            description
        } = listing

        return (
            <div className="listing-show-container">
                <img />
                <h1>{title}</h1>
                <p>
                    {
                        numReviews ? (
                        <span>
                            <span> &#9733; </span> 
                            <span> {averageRating} </span> 
                            <span> · </span>
                            <a> {`${numReviews} review${numReviews>1 ? "s" : ""}`} </a>
                        </span>
                        ) : null
                    }
                     <span>   ·   {`${city}, ${state}, ${country}`}</span>
                </p>
                <h2> {`${typeOfPlace.split(" ")[0]} ${propertyType.toLowerCase()} hosted by ${hostName}`}</h2>
                <p>
                    <span> {`${maxGuests} guest${maxGuests>1 ? "s" : ""} · `} </span> 
                    <span> {`${numBedrooms} bedroom${numBedrooms>1 ? "s" : ""} · `} </span> 
                    <span> {`${numBeds} bed${numBeds>1 ? "s" : ""} · `} </span> 
                    <span> {`${numBaths} bath${numBaths>1 ? "s" : ""}`} </span> 
                </p>
                <p>{description}</p>
                <h2>What this place offers</h2>
                <ul>
                    {/* //iteralte through listing_features */}
                </ul>
                <h2>Where you'll be</h2>
                {listing ? <ListingMap listings={[listing]} updateFilter={updateFilter} listingId={listingId}/> : <div></div>}
                
            </div>
        );
    };
};

export default ListingShow; 