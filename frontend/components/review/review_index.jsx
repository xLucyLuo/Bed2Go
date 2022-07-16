import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link, withRouter } from 'react-router-dom'

class ReviewIndex extends React.Component {

    render() {
        const { reviews } = this.props;

        if (!reviews) {return null;}
        // debugger
        return (
            <div className="review-index-container" >
                <h2>Reviews</h2>
                <Link to={`${this.props.location.pathname}/reviews/new`} className='logo'>
                    <a>Write a review</a>
                </Link>
                {/* <a onClick={()=>this.props.history.push(`/reviews/new`)}>Write a review</a> */}
                <div className='review-index-content'>
                    {reviews.map((review) => <ReviewIndexItem key={review.id} review={review} />)}
                </div>
            </div>
        );
    };
};

export default withRouter(ReviewIndex);
