import React from 'react';
import ListingMap from './../listing_map';
import ReviewIndexContainer from './../../review/review_index_container'
import { fetchReviews } from './../../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import ReservationForm from './../../reservation/reservation_form';

class ListingShow extends React.Component {
    componentDidMount() {
        const { listingId, updateFilter } = this.props;
        updateFilter("listingId", listingId);
        // fetchReviews("listingId", listingId)
        // debugger
    };

    componentWillUnmount() {
        const { clearFilter } = this.props;
        clearFilter("listingId");
        // debugger
    };

    render() {
        
        const { listings, listing, listingId, reviews, updateFilter } = this.props;

        if (!listing || !listings || Object.keys(listings).length !== 1 || Object.keys(listings)[0] !== listingId.toString()) {return null;}

        const { 
            title, 
            // averageRating,
            // numReviews, 
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
            description,
            imgUrl,
            hostImgUrl,
            features,
        } = listing

        const sumRatings = {
            cleanliness: 0,
            accuracy: 0,
            communication: 0,
            location: 0,
            checkIn: 0,
            value: 0,
        };

        
        let countReviews = 0;
        let totalRatingsSum = 0
        
        for (let review in reviews) {
            countReviews += 1;
            for (let rating in sumRatings){
                sumRatings[rating] += reviews[review][rating];
                totalRatingsSum += reviews[review][rating]
            }
        }

        let overallRating = 0;
        if (countReviews > 0) {
            overallRating = (Math.round(totalRatingsSum/(countReviews * Object.keys(sumRatings).length)*10)/10).toFixed(1);
        }

        // debugger

        return (

            <div className="listing-show-container">
                
                <div className='listing-show-title'>
                    <h1>{title}</h1>
                    <p>
                        <span>
                            <span> &#9733; </span> 
                            <span> {overallRating || "New"} </span> 
                            <span> · </span>
                            <a  onClick={() => {document.getElementById('review-index-container').scrollIntoView()}}> 
                                {`${countReviews || 0} review${countReviews || 0 >1 ? "s" : ""}`} 
                            </a>
                        </span>
                            
                        <span>   ·   {`${city}, ${state}, ${country}`}</span>
                    </p> 
                </div>

                <div className="listing-show-images">
                    <img className="main-listing-image" src={imgUrl}/>
                    <div className="oth-listing-images-container">
                        <img className="oth-listing-image" />
                        <img className="oth-listing-image" />
                        <img className="oth-listing-image" />
                        <img className="oth-listing-image" />
                    </div>
                </div>
                
                <div className='listing-info-and-reservation'>
                    <div className="listing-info">
                        <div className='listing-show-subtitle'>
                            <div className='listing-show-subtitle-text'>
                                <h2> {`${typeOfPlace.split(" ")[0]} ${propertyType.toLowerCase()} hosted by ${hostName}`}</h2>
                                <p>
                                    <span> {`${maxGuests} guest${maxGuests>1 ? "s" : ""} · `} </span> 
                                    <span> {`${numBedrooms} bedroom${numBedrooms>1 ? "s" : ""} · `} </span> 
                                    <span> {`${numBeds} bed${numBeds>1 ? "s" : ""} · `} </span> 
                                    <span> {`${numBaths} bath${numBaths>1 ? "s" : ""}`} </span> 
                                </p>
                            </div>
                            <img className="host-image" src={hostImgUrl} />
                        </div>
                        <p className='listing-show-description'>{description}</p>
                        <div className="listing-show-features">
                            <h2>What this place offers</h2>
                            <ul className="features-list">
                                {Object.values(features).map((feature, idx) => {
                                    return(
                                        <li className="features-list-item" key={idx}>{feature.name}</li>
                                    )
                                })}
                            </ul>

                        </div>
                    </div>
                    <div className="listing-reservation">
                        <ReservationForm />
                    </div>
                </div>

                

                <ReviewIndexContainer listingId={listingId} sumRatings={sumRatings} overallRating={ overallRating } countReviews={countReviews} />
                <h2>Where you'll be</h2>
                {listing ? <ListingMap listings={[listing]} updateFilter={updateFilter} listingId={listingId}/> : <div></div>}
                
            </div>
        );
    };
};

export default withRouter(ListingShow); 