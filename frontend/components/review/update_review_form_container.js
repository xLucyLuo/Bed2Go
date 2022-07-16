import { connect } from 'react-redux';

import { updateReview, clearReviewErrors } from './../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ reviews, errors: {review: reviewErrors} }, ownProps) => ({
  review: reviews[ownProps.match.params.reviewId],
  errors: reviewErrors,
  formType: "Update Review",
  // navLink: <p>Already have an account? <Link to="/login">Log in</Link></p>,
});

const mapDispatchToProps = (dispatch) => ({
  updateReview: (review) => dispatch(updateReview(review)),
  clearErrors: () => dispatch(clearReviewErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);