import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link, withRouter } from 'react-router-dom'

class ReviewIndex extends React.Component {
    linkToCreateReview(){
        const { currentUserId, openModal, history, location } = this.props;

        if (currentUserId) {
            history.push(`${location.pathname}/reviews/new`);
        } else {
            openModal("login");
        }
    }

    render() {
        const { reviews, deleteReview, currentUserId, header} = this.props;

        if (!reviews) {return null;}
        // debugger
        return (
            <div className="review-index-container" id="review-index-container">
                <div className='review-index-header'>
                    {header ? header : <h2> Reviews </h2>}
                    <a className='create-review-link' onClick={() => this.linkToCreateReview()}> Write a review </a>
                </div>
                {/* <a onClick={()=>this.props.history.push(`/reviews/new`)}>Write a review</a> */}
                <div className='review-index-content'>
                    {reviews.map((review) => <ReviewIndexItem key={review.id} review={review} deleteReview={deleteReview} currentUserId={currentUserId}/>)}
                </div>
            </div>
        );
    };
};

export default withRouter(ReviewIndex);
