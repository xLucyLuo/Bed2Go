
import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
          <div className="search-bar-container">
            <input id="google-maps-search" className="search-bar input-location" placeholder="Start your search"/>
            {/* <input className="search-bar input-checkin" placeholder="Check in"/>
            <input className="search-bar input-checkout" placeholder="Check out"/>
            <input className="search-bar input-guests" placeholder="Who"/> */}
            <button className="search-button">
                <i className="fas fa-search"></i>
            </button>
          </div>
        )
    }
  }