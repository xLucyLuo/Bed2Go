import { connect } from 'react-redux';
import { createReservation, clearReservationErrors } from './../../actions/reservation_actions';
import { openModal } from './../../actions/modal_actions';
import ReservationForm from './reservation_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ 
    entities: { listings },
    errors: { reservations: reservationErrors }, 
    filters,
    session 
    }, ownProps) => {
        // debugger
        return ({
            reservation: {
            listingId: ownProps.match.params.listingId,
            userId: session.id,
            numGuests: 1,
            startDate: new Date().toLocaleDateString('en-ca'),
            endDate: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toLocaleDateString('en-ca'),
            payment: 0,
        },
        listing: listings[ownProps.match.params.listingId],
        errors: reservationErrors,
        formType: "Create Reservation",
        currentUserId: session.id,
        // navLink: <p>Already have an account? <Link to="/login">Log in</Link></p>,
    })
};

const mapDispatchToProps = (dispatch) => ({
  submit: (reservation) => dispatch(createReservation(reservation)),
  clearErrors: () => dispatch(clearReservationErrors()),
  openModal: modal => dispatch(openModal(modal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationForm));