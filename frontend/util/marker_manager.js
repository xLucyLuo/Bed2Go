export default class MarkerManager {
    constructor(map, icon, addRadius, addLabel, clickable, handleClick){
        this.map = map;
        this.clickable = clickable;
        this.handleClick = handleClick;
        this.markers = {};
        this.icon = icon;
        this.addRadius = addRadius;
        this.addLabel = addLabel
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

        // debugger
        const label = {
            text: (this.addLabel ? `$${price.toString()}` : " "),
            color: 'black',
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Nunito",
        }

        const marker = new google.maps.Marker({
            markerId: listing.id,
            position: new google.maps.LatLng(lat, lng),
            map: this.map,
            label: label,
            clickable: this.clickable,
            icon: this.icon
            // labelContent:"checkcheck",
            // labelClass: "labels",
            // labelAnchor: new google.maps.Point(3, 30),
            // labelInBackground:false,
        });

        marker.addListener("click", () => this.handleClick(listing));
        this.markers[id] = marker;

        if (this.addRadius){
            const circle = new google.maps.Circle({
                map: this.map,
                radius: 500,
                fillColor: '#E31C5F',
                strokeColor: '#FF385C',
                strokeOpacity: 0.1,
                strokeWeight: 3,
                clickable: false,
            })
            
            circle.bindTo('center', marker, 'position');
        };
    };

    removeMarker(marker) {
        this.markers[marker.markerId].setMap(null);
        delete this.markers[marker.markerId];
    }
};


  