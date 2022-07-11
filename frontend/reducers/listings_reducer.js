import { RECEIVE_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING } from './../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (state = {}, action.type) {
        case RECEIVE_LISTINGS:
            console.log(Object.assign({}, state, action.listings));
            return Object.assign({}, state, action.listings);
        case RECEIVE_LISTING:
            return Object.assign({}, state, {[action.listing.id]: action.listing});
        case REMOVE_LISTING:
            const nextState = Object.assign({}, state);
            delete nextState[action.listing.id];
            return nextState;
        default:
            return state;
    }
};

export default listingsReducer;