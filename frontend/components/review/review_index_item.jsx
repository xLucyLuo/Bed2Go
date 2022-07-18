import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ReviewIndexItem = (props) => {
    const { review, deleteReview, currentUserId } = props
    const { id, comment, reviewerName, updatedAt, reviewerId, reviewerImgUrl } = review;
    
    const updateDate = new Date(updatedAt).toLocaleDateString('en-us', { year:"numeric", month:"short"})
    return (
        // <p>{comment}</p>
        <div className="review-index-item-container">
            <div className="review-index-item-title">
                <img className="reviewer-image" src={reviewerImgUrl}/>
                <div className="review-index-item-title-text">
                    <div className="review-index-item-title-desc">
                        <p className="reviewer-name">{reviewerName}</p>
                        <p className="review-date-updated">{updateDate}</p>
                    </div>
                    {currentUserId === reviewerId ? (
                        <div className="review-edit-delete">
                            <Link to={`${props.location.pathname}/reviews/${id}/edit`} className='edit-review-link'>
                                Edit
                            </Link>
                            <a onClick={() => deleteReview(id)}>Delete</a>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="review-comment">{comment}</div>
        </div>
    );
};

export default withRouter(ReviewIndexItem);