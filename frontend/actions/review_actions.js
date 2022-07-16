import * as reviewAPIUtil from './../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews,
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review,
});

export const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review,
});

export const clearReviews = (reviews) => ({
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


export const fetchReviews = (filters) => (dispatch) => (
    reviewAPIUtil.getReviews(filters)
        .then((reviews) => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (id) => (dispatch) => (
    reviewAPIUtil.getReview(id)
        .then((review) => dispatch(receiveReview(review)))
);

export const createReview = (review) => (dispatch) => (
    reviewAPIUtil.postReview(review).then(
        (review) => dispatch(receiveReview(review)),
        (err) => (dispatch(receiveReviewErrors(err.responseJSON)))
    )
);

export const updateReview = (review) => (dispatch) => (
    reviewAPIUtil.patchReview(review).then(
        (review) => dispatch(receiveReview(review)),
        (err) => (dispatch(receiveReviewErrors(err.responseJSON)))
    )
);

export const deleteReview = (id) => (dispatch) => (
    reviewAPIUtil.deleteReview(id).then(
        (review) => (dispatch(removeReview(id))),
        (err) => (dispatch(receiveReviewErrors(err.responseJSON)))
    )
);
