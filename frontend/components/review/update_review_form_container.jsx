import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, updateReview, clearReviewErrors } from './../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ entities: { reviews }, errors: {reviews: reviewErrors} }, ownProps) => {
  // debugger
  return ({
    review: reviews[parseInt(ownProps.match.params.reviewId)],
    errors: reviewErrors,
    formType: "Update Review",
    // navLink: <p>Already have an account? <Link to="/login">Log in</Link></p>,
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  submit: (review) => dispatch(updateReview(review)),
  clearErrors: () => dispatch(clearReviewErrors()),
});

class UpdateReviewForm extends React.Component {
  componentDidMount() {
    this.props.fetchReview(parseInt(this.props.match.params.reviewId));
    // debugger
  }

  render() {
    const { submit, clearErrors, formType, review, errors } = this.props;

    if (!review) return null;
    return (
      <ReviewForm
        submit={submit}
        formType={formType}
        clearErrors={clearErrors} 
        review={review}
        errors={errors}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm);
