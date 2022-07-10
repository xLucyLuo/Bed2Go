import { connect } from 'react-redux';
import Greeting from './greeting';
import { signup, login, logout } from './../../actions/session_actions';

const mapStateToProps = ({ session , entities: { users } }) => ({
    currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
