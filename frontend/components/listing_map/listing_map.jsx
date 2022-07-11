import React from 'react';
import MarkerManager from './../../util/marker_manager';

// note: can refactor to variables (will faill with error for typos)
const mapOptionsByLocation = {
    "San Francisco": {
        center: { lat: 37.7758, lng: -122.435 },
        zoom: 13
    },
};

const DEFAULT_MAP_OPTIONS = mapOptionsByLocation["San Francisco"]

class ListingMap extends React.Component{
    componentDidMount() {
        // wrap 'map' ref node in a Google Map
        this.map = new google.maps.Map(this.refs.map, DEFAULT_MAP_OPTIONS);
        this.setMapListeners();
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.listings);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listings !== this.props.listings) {
            this.MarkerManager.updateMarkers(this.props.listings);
        };
    }

    setMapListeners = () => {
        this.map.addListener("idle", () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();

            const bounds = {
              northEast: { lat: north, lng: east },
              southWest: { lat: south, lng: west },
            };

            this.props.updateFilter("bounds", bounds);
        });

        this.map.addListener("click", () => {
            
        });
    };

    render() {
        return(
            <div id='map-container' ref='map' /> //application.css sets width and height for render
        );
    };
}

export default ListingMap;