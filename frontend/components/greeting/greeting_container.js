import { connect } from 'react-redux';
import Greeting from './greeting';
import { signup, login, logout } from './../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session , entities: { users } }) => ({
    currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
