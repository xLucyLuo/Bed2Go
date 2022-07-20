import * as reservationAPIUtil from './../util/reservation_api_util';

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const CLEAR_RESERVATIONS = 'CLEAR_RESERVATIONS'
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const CLEAR_RESERVATION_ERRORS = 'CLEAR_RESERVATION_ERRORS';

export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations,
});

export const receiveReservation = (reservation) => {
    // debugger
    return ({
        type: RECEIVE_RESERVATION,
        reservation,
    });
}

export const removeReservation = (reservationId) => {
    return ({
        type: REMOVE_RESERVATION,
        reservationId,
    });
}   

export const clearReservations = () => ({
    type: CLEAR_RESERVATIONS,
});

//errors is an Array
export const receiveReservationErrors = (errors) => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors,
});

export const clearReservationErrors = () => ({
    type: CLEAR_RESERVATION_ERRORS,
});


export const fetchReservations = (filters) => (dispatch) => {
    debugger
    return (
        reservationAPIUtil.getReservations(filters)
            .then((payload) => {
                // console.log(payload);
                dispatch(receiveReservations(payload.reservations));
                dispatch(receiveListings(payload.listings));
            })
    );
};

export const fetchReservation = (reservationId) => (dispatch) => {
    
    return (
        reservationAPIUtil.getReservation(reservationId)
            .then((payload) => {
                dispatch(receiveReservation(payload.reservations[reservationId]));
                dispatch(receiveListing(payload.listings[listingId]))
            })
    )
};

export const createReservation = (reservation) => (dispatch) => {
    return (
        reservationAPIUtil.postReservation(reservation).then(
            reservation => (dispatch(receiveReservation(reservation))),
            err => (dispatch(receiveReservationErrors(err.responseJSON)))
        )
    );
};

export const updateReservation = (reservation) => (dispatch) => (
    reservationAPIUtil.patchReservation(reservation).then(
        reservation => (dispatch(receiveReservation(reservation))),
        err => (dispatch(receiveReservationErrors(err.responseJSON)))
    )
);

export const deleteReservation = (reservationId) => (dispatch) => {
    // debugger
    return (
        reservationAPIUtil.deleteReservation(reservationId).then(
            reservation => (dispatch(removeReservation(reservationId))),
            err => (dispatch(receiveReservationErrors(err.responseJSON)))
        )
    );
};
