
import React from 'react'

export default class SearchBar extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        locationFilter: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);

      this.ref = React.createRef()

    }

  

    handleSubmit(e) {
      e.preventDefault();

      const searchBar = document.getElementById("google-maps-search")
      console.log(document.getElementById("google-maps-search").value)
      this.setState({ locationFilter: document.getElementById("google-maps-search").value })

      google.maps.event.trigger( searchBar, 'focus', {} )
      
      const pacItem = document.getElementsByClassName('pac-item')[0]
      pacItem.dispatchEvent(new KeyboardEvent('keypress', {
        key: 'ArrowDown',
      }))

      // debugger
      // console.log(pacItem)

      // pacItem.dispatchEvent(new KeyboardEvent('keypress', {
      //   key: 'Enter',
      // }))

      // google.maps.event.trigger( searchBar, 'focus', {} )

      // google.maps.event.trigger( pacItem, 'focus', {} )
      
    }


    update(field) {
      
      return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
          <form ref={this.ref}className="search-bar-container" onSubmit={this.handleSubmit}>
            <input id="google-maps-search" className="search-bar input-location" placeholder="Start your search" value={this.state.locationFilter} onChange={this.update('locationFilter')}/>
            {/* <input className="search-bar input-checkin" placeholder="Check in"/>
            <input className="search-bar input-checkout" placeholder="Check out"/>
            <input className="search-bar input-guests" placeholder="Who"/> */}
            <button onClick={this.handleSubmit}className="search-button">
                <i className="fas fa-search"></i>
            </button>
          </form>
        )
    }
  }