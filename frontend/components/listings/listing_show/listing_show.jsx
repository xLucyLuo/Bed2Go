import React from 'react';
import ListingMap from './../listing_map';
import ReviewIndexContainer from './../../review/review_index_container'
import { fetchReviews } from './../../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import CreateReservationFormContainer from './../../reservation/create_reservation_form_container';
import ReservationCalendar from './../../reservation/reservation_calendar';
import * as miscUtil from './../../../util/misc_util'

class ListingShow extends React.Component {
    componentDidMount() {
        const { listingId, updateFilter, fetchListings } = this.props;
        // console.log("mount", this.props)
        updateFilter("listingId", listingId);
        // fetchListings({"listingId": listingId})
        // debugger
    };

    componentDidUpdate(prevProps){
        // console.log(prevProps)
        // console.log(this.props)
        if (prevProps.location.pathname!== this.props.location.pathname){
            const { listingId, updateFilter, fetchListings } = this.props;
            updateFilter("listingId", listingId);
            // fetchListings({"listingId": listingId})
            // debugger
        }
    }

    componentWillUnmount() {
        const { clearFilter } = this.props;
        clearFilter("listingId");
        // debugger
    };

    render() {
        
        const { listings, listing, listingId, reviews, updateFilter, reservations } = this.props;

        if (!listing || listing.id !== listingId || !listing.features) {return null;}
        
        // debugger
        // console.log(listing)
        // console.log(this.props)

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
            imgUrls,
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
        let disabledDates = []
        for (let reservation of reservations) {
            disabledDates = disabledDates.concat(miscUtil.getDaysArray(reservation.startDate, reservation.endDate));
        }

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
                    <img className="main-listing-image" src={imgUrls[0]}/>
                    <div className="oth-listing-images-container">
                        {imgUrls.map((imgUrl, idx) => 
                            idx > 0 ? <img className="oth-listing-image" key={`${listing.id}-p${idx}`} src={imgUrl}/> : null
                        )}
                    </div>
                </div>
                
                <div className='listing-info-and-reservation'>
                    <div className="listing-info">
                        <div className='listing-show-subtitle'>
                            <div className='listing-show-subtitle-text'>
                                <h2> {`${miscUtil.SUBTITLE_PLACE_TYPE[typeOfPlace][propertyType]} hosted by ${hostName}`}</h2>
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
                                    // console.log(feature)
                                    return(
                                        <li className="features-list-item" key={idx}>{feature.name}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="listing-show-availability" id="nav-listing-availability">
                            <h2>Check Availability</h2>
                            <ReservationCalendar disabledDates={disabledDates}/>
                        </div>

                    </div>

                    <div className="listing-reservation">
                        <CreateReservationFormContainer sumRatings={sumRatings} overallRating={ overallRating } countReviews={countReviews}
                        disabledDates={disabledDates}/>
                    </div>
                </div>


                <ReviewIndexContainer listingId={listingId} sumRatings={sumRatings} overallRating={ overallRating } countReviews={countReviews} />
                <h2>Where you'll be</h2>
                {listing ? <ListingMap listings={[listing]} updateFilter={updateFilter} listingId={listingId}/> : null}
                
            </div>
        );
    };
};

export default withRouter(ListingShow); 