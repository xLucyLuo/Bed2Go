import React from 'react';
import { withRouter } from 'react-router-dom';

const ReviewIndexItem = (props) => {
    const { comment, reviewerName, updatedAt, reviewerId } = props.review;
    // debugger
    const updateDate = new Date(updatedAt).toLocaleDateString('en-us', { year:"numeric", month:"short"})
    return (
        // <p>{comment}</p>
        <div className="review-index-item-container">
            <div className="review-index-item-title">
                <img className="reviewer-image" />
                <div className="review-index-item-title-desc">
                    <p className="reviewer-name">{reviewerName}</p>
                    <p className="review-date-updated">{updateDate}</p>
                </div>
            </div>
            <div className="review-comment">{comment}</div>
        
        </div>
    );
};

export default withRouter(ReviewIndexItem);