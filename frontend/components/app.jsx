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


function App (props) {
  // debugger
  return (
  <div className='app-container'>
    <ModalContainer />
    
    <header className={`main-header`}>
        <div className={`main-header-content${ props.location.pathname.match(/\/listings\/+[^\/]/) ? " page-width-narrow" : ""}`}>
          <Link to="/" className='logo'>
              <h1 className="main-logo">Mybnb</h1>
          </Link>
          <GreetingContainer />
        </div>
    </header>
    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      <Route exact path="/listings/:listingId" component={ListingShowContainer} />
         
      <ProtectedRoute exact path="/listings/:listingId/reviews/new" component={CreateReviewFormContainer} />

      <ProtectedRoute exact path="/listings/:listingId/reviews/:reviewId/edit" component={UpdateReviewFormContainer} />

      <Route exact path="/" component={SearchContainer} /> 
     
    </Switch>
  </div>
  )
};

export default withRouter(App);