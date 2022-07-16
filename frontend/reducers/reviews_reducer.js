import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, CLEAR_REVIEWS } from './../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            // return Object.assign({}, state, action.reviews);
            return Object.assign({}, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review});
            // return {[action.review.id]: action.review};
        case REMOVE_REVIEW:
            const nextState = Object.assign({}, state);
            delete nextState[action.review.id];
            return nextState;
        case CLEAR_REVIEWS:
            return {};
        default:
            return state;
    }
};

export default reviewsReducer;