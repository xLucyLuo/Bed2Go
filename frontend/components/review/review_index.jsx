import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link, withRouter } from 'react-router-dom'
import * as miscUtil from './../../util/misc_util'

class ReviewIndex extends React.Component {
    linkToCreateReview(){
        const { currentUserId, openModal, history, location } = this.props;

        if (currentUserId) {
            history.push(`${location.pathname}/reviews/new`);
        } else {
            openModal("login");
        }
    }

    renderAverageCategories(){
        const { sumRatings, countReviews } = this.props;

        if (!countReviews) { return null }

        const categoriesArr = Object.keys(sumRatings)
        const sumsArr = Object.values(sumRatings)

        return (
            <div className="rating-category-averages-container">
                {categoriesArr.map((category, idx) => {
                    const average = sumsArr[idx] / countReviews;
                    return (
                        <div className="rating-category-average" key={idx}>
                            <p className="rating-category-label">{ miscUtil.LABEL_MAP[category] }</p>
                            <div className="rating-category-value">
                                <div className="rating-bar-outter">
                                    <span style={{width: [average/5*100] + `%`}} className="rating-bar-inner"></span>
                                </div>
                                <p className="rating-average-label">{(Math.round(average*10)/10).toFixed(1)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

    }

    render() {
        const { reviews, deleteReview, currentUserId, overallRating, countReviews } = this.props;

        // if (!reviews) {return null;}
        // debugger
        return (
            <div className="review-index-container" id="review-index-container">
                <div className="review-index-header">
                    <h2>&#9733; {`${ overallRating || "New" } · ${countReviews} review${countReviews>1 ? "s" : ""}`}</h2>
                    <a className="create-review-link" onClick={() => this.linkToCreateReview()}> Write a review </a>
                </div>
                {this.renderAverageCategories()}
                <div className='review-index-content'>
                    {reviews.map((review) => <ReviewIndexItem key={review.id} review={review} deleteReview={deleteReview} currentUserId={currentUserId}/>)}
                </div>
            </div>
        );
    };
};

export default withRouter(ReviewIndex);
