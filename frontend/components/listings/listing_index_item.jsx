import React from 'react';
import { withRouter } from 'react-router-dom';
import * as miscUtil from './../../util/misc_util'

const ListingIndexItem = (props) => {
    const { averageRating, numReviews, typeOfPlace, propertyType, city, title, numBeds, price, priceUnits, imgUrls, additionalGuestCharge} = props.listing;
 
    if (!props.listing || !miscUtil) {return null;}

    return (
        <div className="listing-index-item" onClick={() => {
            props.history.push(`listings/${props.listing.id}`)
            }}>
            <img className="listings-tile-image" src={imgUrls[0]}/>
            <div className="listing-index-item-title">
                <h4>{`${miscUtil.TITLE_PLACE_TYPE[typeOfPlace][propertyType]} in ${city}`}</h4>
                <div className="listing-index-item-reviews">
                    <span> &#9733; </span> 
                    <span> {averageRating || 'New'} </span> 
                    <span> {numReviews ? `(${numReviews})` : ""} </span>
                </div>
            </div>
            <li className="desc-summary">{title}</li>
            <li className="desc-summary">{`${numBeds} bed`}</li>
            <li className="desc-summary">
                <span className="bold"> 
                    {`$${Math.round(price)}`} 
                </span> 
                {` ${priceUnits}`}
            </li>
        </div>
    );
};

export default withRouter(ListingIndexItem);