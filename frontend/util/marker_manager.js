export default class MarkerManager {
    constructor(map, clickable, handleClick){
        this.map = map;
        this.clickable = clickable;
        this.handleClick = handleClick;
        this.markers = {};
    };

    updateMarkers(listings) {
        // create object so can call lookup in O(n)
        const listingsObj = {};

        for (const listing of listings) {
            listingsObj[listing.id] = listing;

            if (this.markers[listing.id] === undefined) {
                this.createMarkerFromListing(listing);
            }
        }
        
        Object.keys(this.markers)
            .filter(listingId => !listingsObj[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    };

    createMarkerFromListing(listing) {
        const { id, lat, lng, price } = listing;
        const marker = new google.maps.Marker({
            markerId: listing.id,
            position: new google.maps.LatLng(lat, lng),
            map: this.map,
            label: price.toString(),
            clickable: this.clickable,
        });

        marker.addListener("click", () => this.handleClick(listing));
        this.markers[id] = marker;
    };

    removeMarker(marker) {
        this.markers[marker.markerId].setMap(null);
        delete this.markers[marker.markerId];
    }
};


  