import { connect } from 'react-redux';
import Search from './search';
import { fetchListings } from './../../actions/listing_actions';

const mapStateToProps = (state) => ({
    listings: Object.values(state.entities.listings),
});

const mapDispatchToProps = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);