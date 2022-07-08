import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING } from "../actions/listing-actions";

const listingsReducer = (state, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:

        case RECEIVE_LISTING:

        case REMOVE_LISTING:
    
        default:
            return state;
    }
};

export default listingsReducer;