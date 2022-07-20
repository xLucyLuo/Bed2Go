import React from 'react';
import { withRouter } from 'react-router-dom';

const ReservationIndexItem = (props) => {

    if (!props.listing || !props.reservation){return null}
    const { typeOfPlace, propertyType, streetAddress, city, state, country, hostName, imgUrl} = props.listing;
    const { startDate, endDate} = props.reservation;

    let startDateD = new Date(startDate)
    let endDateD = new Date(endDate)
    startDateD = new Date(startDateD.getTime() + ((24) * 60 * 60 * 1000))
    endDateD = new Date(endDateD.getTime() + ((24) * 60 * 60 * 1000))
    let dateFormat = { month:"short", day:"numeric"};
    let yearFormat = {year: "numeric"};
    let isSameYear = startDateD.getYear() === endDateD.getYear()


    // debugger
    return (
        <div className="reservation-item-container">
            <div className="reservation-item-text">
                <div className="reservation-item-title">
                    <h2>{`${city}`}</h2>
                    <p className="reservation-item-subtext"> {`${typeOfPlace.split(" ")[0]} ${propertyType.toLowerCase()} hosted by ${hostName}`}</p>
                </div>
                <div className="reservation-item-info">
                    <div className="reservation-item-date-range">
                        <p className="reservation-date">
                            {`${startDateD.toLocaleDateString('en-ca', dateFormat)}`}
                            <span className="reservation-year">
                                {isSameYear ? " " : ` ${startDateD.toLocaleDateString('en-ca', yearFormat)}`}
                            </span>
                            <span> - </span>
                            {/* <span className="date-range-to"> {isSameYear ? " - " : " to "} </span> */}
                        </p> 
                        <p className="reservation-date">
                            {`${endDateD.toLocaleDateString('en-ca', dateFormat)}`}
                            <span className="reservation-year">
                                {isSameYear  ? " " : ` ${endDateD.toLocaleDateString('en-ca', yearFormat)}`}
                            </span>
                        </p>
                        <p className="reservation-year">
                            {isSameYear  ? `${endDateD.toLocaleDateString('en-ca', yearFormat)}` : ""}
                        </p>
                    </div>
                    <div className="reservation-item-address">
                        <p className="reservation-address1">{`${streetAddress}`}</p>
                        <p className="reservation-address2">{`${city}, ${state}`}</p>
                        <p className="reservation-address3">{`${country}`}</p>
                    </div>
                </div>
            </div>
            <div className="reservation-item-image">
                <img className="reservations-tile-image" src={imgUrl}/>
            </div>
        </div>
    );
};

export default withRouter(ReservationIndexItem);