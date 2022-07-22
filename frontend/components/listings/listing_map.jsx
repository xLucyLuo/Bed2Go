import React from 'react';
import MarkerManager from './../../util/marker_manager';
import { withRouter } from 'react-router-dom';


//larger is more zoomed-in
const SINGLE_MARKER_ZOOM = 13;
const MAP_ID = '2e84cab39be786ee'

// note: can refactor to variables (will faill with error for typos)
const mapOptionsByLocation = {
    "San Francisco": {
        center: { lat: 37.7758, lng: -122.435 },
        zoom: 12,
        mapId: MAP_ID,
    },
};

const DEFAULT_MAP_OPTIONS = mapOptionsByLocation["San Francisco"]

class ListingMap extends React.Component{

    constructor(props){
        super(props);
        // this.bounds = new google.maps.LatLngBounds();
        //can then user bounds.extend(marker.position) after adding markers;
        //map.fitBounds(bounds);

        this.mapOptions = DEFAULT_MAP_OPTIONS;

        this.preventUpdateFilter = false;
    }

    componentDidMount() {
        let markerClickable = true;
        let icon = {
            url: `${window.markerURL}`, 
            scaledSize: new google.maps.Size(75, 30), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(35,15) // anchor
        };
        let addRadius = false;
        let addLabel = true;
        // wrap 'map' ref node in a Google Map
        const { listingId, listings } = this.props

        if (listings[0] && 
            listings[0].id === listingId
            && listings.length === 1) {

                const { lat , lng }= listings[0]
                // debugger
                this.mapOptions = {
                    center: { lat: lat, lng: lng },
                    zoom: SINGLE_MARKER_ZOOM,
                    gestureHandling: "none",
                    // disableDefaultUI: true,
                    mapId: MAP_ID,
                }
                
                markerClickable = false;
                icon = {
                    url: this.iconURL || `${window.homeMarkerURL}`, 
                    scaledSize: new google.maps.Size(44, 44), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(22,22) // anchor
                };
                addRadius = true;
                addLabel = false;
                // this.handleMarkerClick = () =>{}
        }
        
        this.mapOptions.streetViewControl = false;
        this.mapOptions.mapTypeControl = false;
        this.mapOptions.fullscreenControl = false;
        this.mapOptions.streetViewControl = false;
        this.mapOptions.clickableIcons = false
        this.mapOptions.zoomControlOptions = {position: google.maps.ControlPosition.RIGHT_TOP}

        this.map = new google.maps.Map(this.refs.map, this.mapOptions);
        this.setMapListeners();
        this.MarkerManager = new MarkerManager(this.map, icon, addRadius, addLabel, markerClickable, this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(listings);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listings !== this.props.listings) {
            this.MarkerManager.updateMarkers(this.props.listings);
        };
    }

    setMapListeners = () => {
        this.map.addListener("idle", (e) => {
            const { north, south, east, west } = this.map.getBounds().toJSON();

            const bounds = {
              northEast: { lat: north, lng: east },
              southWest: { lat: south, lng: west },
            };
            // debugger
            // console.log("idle")
            // console.log(bounds)
            if (!this.preventUpdateFilter){
                this.preventUpdateFilter = true;
                this.props.updateFilter("bounds", bounds)
                .then(()=> this.preventUpdateFilter = false);
            }
        });

        this.input = document.getElementById("google-maps-search");
        this.autocomplete = new google.maps.places.Autocomplete(this.input,{types: ['(regions)']})
        this.service = new google.maps.places.AutocompleteService({types: ['(regions)']});
        this.place = ""
        let that = this
        this.autocomplete.addListener('place_changed', () => {
            // debugger
            that.place = that.autocomplete.getPlace();
            // debugger
            if (that.place.geometry && that.place.geometry.viewport) {
                that.map.fitBounds(that.place.geometry.viewport)
                
                
                console.log(that.map.getBounds().toJSON())
                console.log(that.place.geometry)
                
                
                const { north, south, east, west } = that.map.getBounds().toJSON();
                const bounds = {
                    northEast: { lat: north, lng: east },
                    southWest: { lat: south, lng: west },
                  };

                //   console.log("autocomplete")
                //   console.log(bounds)

                  that.props.updateFilter("bounds", bounds)
                    // .then(this.that.history.push("/"))
 
            } else {
                // that.map.setCenter(place.geometry.location);
                // that.map.setZoom(12);  //preference

                that.service.getQueryPredictions({input: that.place.name}, (predictions) => {
                    predictions[0].description ? that.input.value = predictions[0].description : "";

                    google.maps.event.trigger( that.input, 'focus', {} )

                    
                    that.input.dispatchEvent(new KeyboardEvent( 'keypress', {key: 'ArrowDown'} ))
                    // debugger
                    // this.input.dispatchEvent(new KeyboardEvent( 'keypress', {key: 'Enter'} ))

                    // google.maps.event.trigger( this.refs.mapSearch, 'keypress', {key: 'Enter'} )
                    // google.maps.event.trigger( this.input, 'blur', {} )

                    // google.maps.event.trigger(that.autocomplete, 'place_changed');

                    // debugger
                    
                 
                    // that.place = that.autocomplete.getPlace();
                    // that.map.fitBounds(that.place.geometry.viewport);
                })
            }
   
            // debugger
         })

        // this.input.addEventListener("keypress", function(event) {
        //     // If the user presses the "Enter" key on the keyboard
        //     if (event.key === "Enter") {
        //         // Cancel the default action, if needed
        //         event.preventDefault();
        //         // Trigger the button element with a click
        //         // that.input.dispatchEvent(new Event('change'));
        //         // that.place = that.autocomplete.getPlace();
        //         // that.map.fitBounds(that.place.geometry.viewport);
        //     }
        // });
    }

        // this.map.addListener("click", (e) => {
        //     const coords = {
        //         lat: e.latLng.lat(),
        //         lng:  e.latLng.lng(),
        //     };
        //     this.handleClick(coords);
        // });

    // handleClick(coords) {
    //     this.props.history.push({
    //       pathname: 'listingss/new',
    //       search: `lat=${coords.lat}&lng=${coords.lng}`
    // });

  
    handleMarkerClick(listing) {
      this.props.history.push(`listings/${listing.id}`);
    }


    
    render() {
        return(
            <div id={`map-container${this.props.listingId ? '-show' : ''}`} ref='map' /> //application.css sets width and height for render
        );
    };
}

export default withRouter(ListingMap);