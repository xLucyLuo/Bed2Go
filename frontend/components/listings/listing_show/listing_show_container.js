import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { updateFilter, clearFilter } from './../../../actions/filter_actions';
import { clearReviews } from './../../../actions/review_actions';

const mapStateToProps = (state, { match: { params } }) => {
    // console.log(this.state)
    return {
        listings: state.entities.listings,
        listing: state.entities.listings[params.listingId],
        listingId: parseInt(params.listingId),
        reviews: Object.values(state.entities.reviews).reverse(),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter, value)),
    clearFilter: (filter) => dispatch(clearFilter(filter)),
    // clearReviews: () => dispatch(clearReviews()),
})


export default connect (mapStateToProps, mapDispatchToProps)(ListingShow)