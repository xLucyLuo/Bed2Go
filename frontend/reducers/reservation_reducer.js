import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION, CLEAR_RESERVATIONS } from './../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            // return Object.assign({}, state, action.reservations);
            return Object.assign({}, action.reservations);
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.id]: action.reservation});
            // return {[action.reservation.id]: action.reservation};
        case REMOVE_RESERVATION:
            const nextState = Object.assign({}, state);
            delete nextState[action.reservationId];
            // debugger
            return nextState;
        case CLEAR_RESERVATIONS:
            return {};
        default:
            return state;
    }
};

export default reservationsReducer;