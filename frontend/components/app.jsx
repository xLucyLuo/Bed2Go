import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import SearchContainer from './search/search_container'

const App = () => (
  <div>
    <header>
        <Link to="/" className='logo'>
            <h1>Mybnb</h1>
        </Link>
        
        <GreetingContainer />
    </header>
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} /> 
      {/* 
      <ProtectedRoute exact path="/listings/new" component={ListingsFormContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  </div>
);

export default App;