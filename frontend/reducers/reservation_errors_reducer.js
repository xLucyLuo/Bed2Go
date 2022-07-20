import { RECEIVE_RESERVATION_ERRORS, RECEIVE_RESERVATION, CLEAR_RESERVATION_ERRORS } from './../actions/reservation_actions';

const reservationErrorsReducer = (state = [], action) => {
    
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_RESERVATION_ERRORS:
            return action.errors;
        case RECEIVE_RESERVATION:
        case CLEAR_RESERVATION_ERRORS:
            return [];
        default:
            return state;
    }
};

export default reservationErrorsReducer;