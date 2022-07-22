import { connect } from 'react-redux';
import FilterForm from './filter_form';
import { updateFilter, clearFilter } from './../../actions/filter_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
    // minPrice: ownProps.match.props.minPrice,
    // maxPrice: ownProps.match.props.maxPrice,
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice,
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);