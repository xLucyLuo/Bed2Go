import React from 'react';
import { fetchReservations } from '../../actions/reservation_actions';
import ReservationIndexItem from './reservation_index_item';

class ReservationIndex extends React.Component {
    componentDidMount() {
        const { fetchReservations, currentUserId } = this.props;
        fetchReservations({userId: currentUserId});
    }

    render() {
        const { reservations, listings } = this.props;

        if (!reservations) {return null;}

        return (
            <div className="reservation-index-container" >
                <h1 className="reservation-index-title">Trips</h1>
                <h2>Upcoming Reservations</h2>
                <div  className="reservation-index-items-container">
                    {reservations.sort((a,b) => new Date(b.startDate) - new Date(a.startDate)).map((reservation) => <ReservationIndexItem key={reservation.id} reservation={reservation} listing={listings[reservation.listingId]}/>)}
                </div>
            </div>
        )
    };
}
 

export default ReservationIndex;