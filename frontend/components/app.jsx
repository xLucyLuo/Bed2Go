import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './search/search_container';
import ListingShowContainer from './listings/listing_show/listing_show_container';
import ModalContainer from './modal/modal_container';
import CreateReviewFormContainer from './review/create_review_form_container';
import UpdateReviewFormContainer from './review/update_review_form_container';
import SearchBar from './search/search_bar';
import ReservationIndexContainer from './reservation/reservation_index_container';
// import CheckoutForm from './reservation/checkout_form';


function App (props) {
  // debugger
  return (
  <div className='app-container'>
    <ModalContainer />
    
    <header className={`main-header`}>
        <div className={`main-header-content${ props.location.pathname.match(/\/listings\/+[^\/]/) || props.location.pathname.match(/\/trips/) ? " page-width-narrow" : ""}`}>
          <Link to="/" className='logo-group'>
              <img className="logo" src={window.logoURL} />
              <h1 className="main-logo">Mybnb</h1>
          </Link>
          <SearchBar />
          <GreetingContainer />
        </div>
    </header>
    {/* <div className="main-body"> */}
      <Switch>
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

        <Route exact path="/listings/:listingId" component={ListingShowContainer} />
          
        <ProtectedRoute exact path="/listings/:listingId/reviews/new" component={CreateReviewFormContainer} />

        <ProtectedRoute exact path="/listings/:listingId/reviews/:reviewId/edit" component={UpdateReviewFormContainer} />

        {/* <ProtectedRoute exact path="/listings/:listingId/checkout/new" component={CheckoutForm} /> */}

        <ProtectedRoute exact path="/trips" component={ReservationIndexContainer} />

        <Route exact path="/" component={SearchContainer} /> 
      
      </Switch>
    {/* </div> */}

    <footer className={`main-footer`}>
        <div className="main-footer-content">
          <p className="footer-subheading">Contact: </p>
          <a className="social-link" href="https://github.com/xLucyLuo" target="_blank">
            <i className="fab fa-github"></i>
            <p className="social-link-label"> Github</p>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/lucyluo08/" target="_blank">
            <i className="fab fa-linkedin"></i>
            <p className="social-link-label"> LinkedIn</p>
          </a>
          <a className="social-link" href="mailto:lucyluo08@gmail.com" target="_blank">
            <i className="fas fa-envelope"></i>
            <p className="social-link-label"> Email</p>
          </a>

        </div>
    </footer>
  </div>

  
  )
};

export default withRouter(App);