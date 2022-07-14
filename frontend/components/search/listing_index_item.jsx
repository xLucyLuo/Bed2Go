import React from 'react';
import { withRouter } from 'react-router-dom';
const ListingIndexItem = (props) => {
    console.log(props.listing)
    const { averageRating, numReviews, typeOfPlace, propertyType, city, title, numBeds, price, priceUnits} = props.listing;


    return (
        <div className="listing-index-item" onClick={() => props.history.push(`listings/${props.listing.id}`)}>
            <img className="listings-tile-image" />
            <div className="listing-index-item-title">
                <h4>{`${typeOfPlace.split(" ")[0]} ${propertyType} in ${city}`}</h4>
                <div className="listing-index-item-reviews">
                    <span> &#9733; </span> 
                    <span> {averageRating || 'New'} </span> 
                    <span> {`(${numReviews || 0})`} </span>
                </div>
            </div>
            <li className="desc-summary">{title}</li>
            <li className="desc-summary">{`${numBeds} bed`}</li>
            <li className="desc-summary">{`$${Math.round(price)} ${priceUnits}`}</li>
        </div>
    )
};

export default withRouter(ListingIndexItem);