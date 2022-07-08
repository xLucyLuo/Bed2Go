import listingApiUtil from "listing-api-util";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTINGS";
export const REMOVE_LISTING = "REMOVE_LISTING";


export const receiveAllListings = (listings) => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
});

export const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});

export const removeListing = (listing) => ({
    type: REMOVE_LISTING,
    listing
});