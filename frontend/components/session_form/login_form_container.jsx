import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors: {session: sessionErrors} }, ownProps) => ({
    errors: sessionErrors,
    formType: "Log in",
    navLink: <p>Don't have an account? <Link to="/signup">Sign up</Link></p>,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);