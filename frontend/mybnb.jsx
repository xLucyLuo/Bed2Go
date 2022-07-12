import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//FOR TESTING ONLY
import { signup, login, logout } from './actions/session_actions';
import * as listingAPIUtil from './util/listing_api_util';
import { fetchListings } from './actions/listing_actions'

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = undefined
  if (window.currentUser) {
    preloadedState = {
      entities: {users: { [window.currentUser.id]: window.currentUser }},
      session: { id: window.currentUser.id }
    };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);

  // ReactDOM.render(<Root store={store} />, document.getElementById("root"));

  ReactDOM.render(<h1>WORKING</h1>, document.getElementById("root"));

  //FOR TESTING ONLY
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.listingAPIUtil = listingAPIUtil;
  window.fetchListings = fetchListings
  // window.demoUser = {email: "demo.user@mybnb.com", 
  //                     password: "123123", 
  //                     fname: "Demo",
  //                     lname: "User"
  //                   };
});
