
import React from 'react'

export default class SearchBar extends React.Component {
    constructor (props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        locationFilter: ""
      }
    }

  

    handleSubmit(e) {
      e.preventDefault();

      
    }


    update(field) {
      // debugger
      return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
          <form className="search-bar-container" onSubmit={this.handleSubmit}>
            <input id="google-maps-search" className="search-bar input-location" placeholder="Start your search" value={this.state.locationFilter} onChange={this.update('locationFilter')}/>
            {/* <input className="search-bar input-checkin" placeholder="Check in"/>
            <input className="search-bar input-checkout" placeholder="Check out"/>
            <input className="search-bar input-guests" placeholder="Who"/> */}
            <button className="search-button">
                <i className="fas fa-search"></i>
            </button>
          </form>
        )
    }
  }