import { connect } from 'react-redux';
import Search from './search';
import { fetchListings } from './../../actions/listing_actions';
import { updateFilter } from './../../actions/filter_actions';

const mapStateToProps = (state) => ({
    listings: Object.values(state.entities.listings),
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (value, filter) => dispatch(updateFilter(value, filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);