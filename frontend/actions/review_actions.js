import * as reviewAPIUtil from './../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews,
});

export const receiveReview = (review) => {
    // debugger
    return ({
        type: RECEIVE_REVIEW,
        review,
    });
}

export const removeReview = (reviewId) => {
    return ({
        type: REMOVE_REVIEW,
        reviewId,
    });
}   

export const clearReviews = () => ({
    type: CLEAR_REVIEWS,
});

//errors is an Array
export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors,
});

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS,
});


export const fetchReviews = (filters) => (dispatch) => {
    // debugger
    return (
        reviewAPIUtil.getReviews(filters)
            .then((payload) => dispatch(receiveReviews(payload.reviews)))
    );
};

export const fetchReview = (reviewId) => (dispatch) => {
    
    return (
        reviewAPIUtil.getReview(reviewId)
            .then((payload) => dispatch(receiveReview(payload.reviews[reviewId])))
    )
};

export const createReview = (review) => (dispatch) => {
    return (
        reviewAPIUtil.postReview(review).then(
            review => (dispatch(receiveReview(review))),
            err => (dispatch(receiveReviewErrors(err.responseJSON)))
        )
    );
};

export const updateReview = (review) => (dispatch) => (
    reviewAPIUtil.patchReview(review).then(
        review => (dispatch(receiveReview(review))),
        err => (dispatch(receiveReviewErrors(err.responseJSON)))
    )
);

export const deleteReview = (reviewId) => (dispatch) => {
    // debugger
    return (
        reviewAPIUtil.deleteReview(reviewId).then(
            review => (dispatch(removeReview(reviewId))),
            err => (dispatch(receiveReviewErrors(err.responseJSON)))
        )
    );
};
