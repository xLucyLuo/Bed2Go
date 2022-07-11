import * as listingAPIUtil from './../util/listing_api_util';

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

export const fetchListings = () => (dispatch) => (
    listingAPIUtil.getListings()
        .then((listings) => dispatch(receiveListings(listings)))
);

export const fetchListing = (id) => (dispatch) => (
    listingAPIUtil.getListing(id)
        .then((listing) => dispatch(receiveListing(listing)))
);

export const createListing = (listing) => (dispatch) => (
    listingAPIUtil.postListing(listing)
        .then((listing) => dispatch(receiveListing(listing)))
);

// export const updateListing = (listing) => (dispatch) => (
//     listingAPIUtil.patchListing(listing)
//         .then((listing) => dispatch(receiveListing(listing)))
// );

// export const deleteListing = (id) => (dispatch) => ()
//     listingAPIUtil.deleteListing(id)
//         .then((listing) => dispatch(removeListing(id)))
// );
