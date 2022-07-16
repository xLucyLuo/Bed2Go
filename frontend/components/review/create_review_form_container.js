import { connect } from 'react-redux';

import { createReview, clearReviewErrors } from './../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ errors: {reviews: reviewErrors} }, ownProps) => ({
  review: {
    listing_id: "",
     reviewer_id: "",
     comment: "",
     cleanliness: "",
     accuracy: "",
     communication: "",
     location: "",
     check_in: "",
     value: "",
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
