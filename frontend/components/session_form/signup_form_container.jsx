import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors: {session: sessionErrors} }, ownProps) => ({
    errors: sessionErrors,
    formType: "Sign up",
    // navLink: <p>Already have an account? <Link to="/login">Log in</Link></p>,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <p> Don't have an account?&nbsp;&nbsp;
            <button onClick={() => dispatch(openModal('login'))}>Log in</button>
        </p>
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
