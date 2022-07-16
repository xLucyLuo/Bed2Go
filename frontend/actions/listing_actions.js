import * as listingAPIUtil from './../util/listing_api_util';
import { receiveReviews } from './review_actions';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTINGS';
export const REMOVE_LISTING = 'REMOVE_LISTING';

export const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings,
});

export const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing,
});

export const removeListing = (listing) => ({
    type: REMOVE_LISTING,
    listing,
});

export const fetchListings = (filters) => (dispatch) => (
    listingAPIUtil.getListings(filters)
        .then((payload) => {
            // console.log(payload);
            dispatch(receiveListings(payload.listings));
            dispatch(receiveReviews(payload.reviews));
        })
);

export const fetchListing = (id) => (dispatch) => (
    listingAPIUtil.getListing(id)
        .then((listing) => {dispatch(receiveListing(listing))})
);

export const createListing = (listing) => (dispatch) => (
    listingAPIUtil.postListing(listing)
        .then((listing) => dispatch(receiveListing(listing)))
);

// export const updateListing = (listing) => (dispatch) => (
//     listingAPIUtil.patchListing(listing)
//         .then((listing) => dispatch(receiveListing(listing)))
// );

// export const deleteListing = (id) => (dispatch) => (
//     listingAPIUtil.deleteListing(id)
//         .then((listing) => dispatch(removeListing(id)))
// );
