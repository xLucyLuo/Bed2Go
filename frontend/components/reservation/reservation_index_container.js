import { connect } from 'react-redux';
import ReservationIndex from './reservation_index';
import { fetchReservations } from './../../actions/reservation_actions'

const mapStateToProps = (state, ownProps) => ({
    listings: state.entities.listings,
    reservations: Object.values(state.entities.reservations),
    currentUserId: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
    fetchReservations: (filters) => dispatch(fetchReservations(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationIndex);