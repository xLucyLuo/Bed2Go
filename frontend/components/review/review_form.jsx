import React from 'react';
import { withRouter } from 'react-router-dom'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
        return null;
    }
    
    return (
        <div className="error-message">
            <ul>
                {this.props.errors.map((err, i) => 
                    <li key={`${i}`}>{err}</li>
                )}
            </ul>
            <br/>
        </div>
    );
};

  render() {
    const { formType } = this.props;
    return (
        // <h2>Review Form</h2>
        <div className="review-form-container" >
            {/* <div className="right-side" > */}
                <header className="review-form-header">
                    <button onClick={this.props.closeModal} className="close-x">X</button>
                    <h1>{formType}</h1>
                </header>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}

                    <div class="review-category">
                        <label htmlFor="cleanliness-rating-input">Cleanliness: </label>
                        <div className="rating-input" id="cleanliness-rating-input">
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                        </div>
                    </div>
                    
                    <div class="review-category">
                        <label htmlFor="accuracy-rating-input">Accuracy: </label>
                        <div className="rating-input" id="accuracy-rating-input">
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                        </div>
                    </div>
                    
                    <div class="review-category">
                        <label htmlFor="communication-rating-input">Communication: </label>
                        <div className="rating-input" id="communication-rating-input">
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                        </div>
                    </div>

                    <div class="review-category">
                        <label htmlFor="location-rating-input">Location: </label>
                        <div className="rating-input" id="location-rating-input">
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                        </div>
                    </div>

                    <div class="review-category">
                        <label htmlFor="checkin-rating-input">Check-in: </label>
                        <div className="rating-input" id="checkin-rating-input">
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                        </div>
                    </div>

                    <div class="review-category">
                        <label htmlFor="value-rating-input">Value: </label>
                        <div className="rating-input" id="value-rating-input">
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                            <span> &#9733; </span> 
                        </div>
                    </div>


                    <label htmlFor="comment-input">Comment: </label>
                    <textarea  onChange={this.update("comment")}>{this.state.comment}</textarea>
                    <button className="sign-in-button" value={formType}>{formType}</button>
                    <br /> 
                    <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                </form>
            {/* </div> */}
            <footer className="review-form-footer">
            </footer>
        </div>
    )
  }
}

export default withRouter(ReviewForm);
