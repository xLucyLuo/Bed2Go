import { RECEIVE_FILTER, CLEAR_FILTER } from './../actions/filter_actions';

const defaultFilters = Object.freeze({
    bounds: {},
    minPrice: 0,
    maxPrice: 9999999,
  });

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FILTER:
            return Object.assign({}, state, {[action.filter]: action.value});
        case CLEAR_FILTER:
            const nextState = Object.assign({}, state);
            delete nextState[action.filter];
            return nextState;
        default:
            return state;
    }
};

export default filtersReducer;