import React from 'react';

const ListingIndexItem = (props) => {
    console.log(props.listing)
    const { averageRating, numReviews, typeOfPlace, propertyType, city, title, numBeds, price, priceUnits} = props.listing;

    return (
        <div>
            <p>
                {`${typeOfPlace.split(" ")[0]} ${propertyType} in ${city}`} 
                <span> &#9733; </span> 
                <span> {averageRating || 'New'} </span> 
                <span> {`(${numReviews || 0})`} </span>
            </p>
            <li>{title}</li>
            <li>{`${numBeds} bed`}</li>
            <li>{`$${Math.round(price)} ${priceUnits}`}</li>
        </div>
    )
};

export default ListingIndexItem;