import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        const {currentUser, logout, openModal} = this.props
        if (currentUser) {
            return <div>
                <p>Hello, {`${currentUser.fname}`}</p>
                <button onClick={logout}>Log out</button>
            </div>
        } else {
            return <nav className="login-signup">
                <button onClick={() => openModal('login')}>Login</button>
                <button onClick={() => openModal('signup')}>Signup</button>
            </nav>
        }
    }
};

export default Greeting;

