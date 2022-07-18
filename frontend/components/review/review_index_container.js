import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { deleteReview } from './../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { listingId }) => {
    // console.log(this.state)
    return {
        listingId: listingId,
        reviews: Object.values(state.entities.reviews).reverse(),
        currentUserId: state.session.id,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    openModal: modal => dispatch(openModal(modal)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})


export default connect (mapStateToProps, mapDispatchToProps)(ReviewIndex)