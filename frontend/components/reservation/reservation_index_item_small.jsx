import React from 'react';
import { withRouter } from 'react-router-dom';

const ReservationIndexItemSmall = (props) => {

    if (!props.listing || !props.reservation){return null}
    const { id, typeOfPlace, propertyType, streetAddress, city, state, country, hostName, imgUrls} = props.listing;
    const { startDate, endDate} = props.reservation;

    let startDateD = new Date(startDate)
    let endDateD = new Date(endDate)
    startDateD = new Date(startDateD.getTime() + ((24) * 60 * 60 * 1000))
    endDateD = new Date(endDateD.getTime() + ((24) * 60 * 60 * 1000))
    let dateFormat = { month:"short", day:"numeric", year: "numeric"};


    // debugger
    return (
        <div className="reservation-item-container-small" onClick={() => {
            props.history.push(`/listings/${id}`)
        }}>
            <div className="reservation-item-image-container-small">
                <img className="reservations-tile-image-small" src={imgUrls[0]}/>
            </div>
            <div className="reservation-item-text-small">
                    <h4>{`${city}`}</h4>
                    <p className="text-small text-gray">{`Hosted by ${hostName}`}</p>
                    <p className="text-small text-gray">{`${startDateD.toLocaleDateString('en-ca', dateFormat)} - ${endDateD.toLocaleDateString('en-ca', dateFormat)}`}</p>  
            </div>

        </div>
    );
};

export default withRouter(ReservationIndexItemSmall);