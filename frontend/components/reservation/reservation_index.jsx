import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchReservations } from '../../actions/reservation_actions';
import ReservationIndexItem from './reservation_index_item';

class ReservationIndex extends React.Component {
    componentDidMount() {
        const { fetchReservations, currentUserId } = this.props;
        fetchReservations({userId: currentUserId});
        window.scrollTo(0, 0)
    }

    render() {
        const { reservations, listings } = this.props;

        if (!reservations) {return null;}

        const upcomingReservations = reservations.filter(
            (reservation) => new Date(reservation.endDate) >= new Date()
        )
        upcomingReservations.sort((a,b) => new Date(b.startDate) - new Date(a.startDate))

        const previousReservations = reservations.filter(
            (reservation) => new Date(reservation.endDate) < new Date()
        )
        previousReservations.sort((a,b) => new Date(a.startDate) - new Date(b.startDate))

        return (
            <div className="reservation-index-container" >
                <h1 className="reservation-index-title">Trips</h1>
                    {upcomingReservations.length === 0 ? 
                        <div className="reservation-item-container no-upcoming-reservations">
                            <div className="reservation-item-text">
                                <h3>No trips booked...yet!</h3> 
                                <p className="reservation-item-subtext">Time to dust off your bags and start planning your next adventure</p>
                                <button className="start-searching-button" 
                                    onClick={() => this.props.history.push("/")}>
                                    Start searching
                                </button>
                            </div>
                            <div className="reservation-item-image-container">
                                <img className="reservations-tile-image" src={window.noTripsURL}/>
                            </div>
                        </div>
                        :
                        <div className="reservation-index-upcoming">
                            <h2 className="reservation-subheading">Upcoming Reservations</h2>
                            <div  className="reservation-index-items-container">
                                {upcomingReservations.map((reservation) => <ReservationIndexItem key={reservation.id} reservation={reservation} listing={listings[reservation.listingId]}/>)}
                            </div>
                        </div>
                    }

                <div className="reservation-index-previous">
                    <h2 className="reservation-subheading">Where you've been</h2>
                    <div  className="reservation-index-items-container">
                        {previousReservations.map((reservation) => <ReservationIndexItem key={reservation.id} reservation={reservation} listing={listings[reservation.listingId]}/>)}
                    </div>
                </div>
            </div>
        )
    };
}
 

export default withRouter(ReservationIndex);