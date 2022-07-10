import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING } from './../actions/listing_actions';

const listingsReducer = (state, action) => {
    Object.freeze(state);

    switch (state = {}, action.type) {
        case RECEIVE_ALL_LISTINGS:
            return
        case RECEIVE_LISTING:
            return
        case REMOVE_LISTING:
            return
        default:
            return state;
    }
};

export default listingsReducer;