import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from './../../actions/filter_actions';
import { clearReviews } from './../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
    // minPrice: ownProps.match.props.minPrice,
    // maxPrice: ownProps.match.props.maxPrice,
    // minPrice: state.ui.filters.minPrice,
    // maxPrice: state.ui.filters.maxPrice,
    bounds: state.ui.filters.bounds
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    openModal: modal => dispatch(openModal(modal)),
    // clearReviews: () => dispatch(clearReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);