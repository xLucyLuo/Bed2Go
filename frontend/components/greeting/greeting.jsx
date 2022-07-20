import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        const {currentUser, logout, openModal, history} = this.props
        if (currentUser) {
            return <div className="user-auths">
                <p>Hello, {`${currentUser.fname}`}</p>
                <button onClick={() => {
                    history.push(`/trips`)
                }}>Trips</button>
                <button onClick={logout}>Log out</button>
                
            </div>
        } else {
            return <nav className="user-auths">
                <button onClick={() => openModal('login')}>Login</button>
                <button onClick={() => openModal('signup')}>Signup</button>
            </nav>
        }
    }
};

export default withRouter(Greeting);

