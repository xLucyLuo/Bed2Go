import { connect } from 'react-redux';

import { createReview, clearReviewErrors } from './../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ errors: {reviews: reviewErrors} }, ownProps) => ({
  review: {
    listingId: ownProps.match.params.listingId,
    comment: "",
    cleanliness: -1,
    accuracy: -1,
    communication: -1,
    location: -1,
    checkIn: -1,
    value: -1,
  },
  errors: reviewErrors,
  formType: "Create Review",
  // navLink: <p>Already have an account? <Link to="/login">Log in</Link></p>,
});

const mapDispatchToProps = (dispatch) => ({
  submit: (review) => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearReviewErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
