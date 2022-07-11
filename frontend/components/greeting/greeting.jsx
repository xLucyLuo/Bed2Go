import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        const {currentUser, logout} = this.props
        if (currentUser) {
            return <div>
                <p>Hello, {`${currentUser.fname}`}</p>
                <button onClick={logout}>Log out</button>
            </div>
        } else {
            return <div>
                <Link to="/signup">Sign up</Link>
                <span> or </span>
                <Link to="/login">Log in</Link>
            </div>
        }
    }
};

export default Greeting;

