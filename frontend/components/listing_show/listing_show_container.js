import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { updateFilter, clearFilter } from './../../actions/filter_actions';

const mapStateToProps = (state, { match: { params } }) => {
    // console.log(this.state)
    return {
        listing: state.entities.listings[params.listingId],
        listingId: parseInt(params.listingId),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter, value)),
    clearFilter: (filter) => dispatch(clearFilter(filter)),
})


export default connect (mapStateToProps, mapDispatchToProps)(ListingShow)