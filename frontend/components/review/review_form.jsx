import React from 'react';
import { withRouter } from 'react-router-dom'

const HOVER_STATES = {
    cleanlinessHover: -1,
    accuracyHover: -1,
    communicationHover: -1,
    locationHover: -1,
    checkInHover: -1,
    valueHover: -1,
}

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    for (let state in HOVER_STATES) {
        HOVER_STATES[state] = props.review[`${state.replace("Hover", "")}`]
    }

    this.state = Object.assign({},
        props.review,
        HOVER_STATES,
    );

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();

    // const review_params = Object.assign({}, this.state);
    // Object.keys(HOVER_STATES).forEach((state) => delete review_params[state]);

    this.props.submit(this.state)
        .then(
            review => this.props.history.goBack(),
            err => window.scrollTo(0, 0)
        )

  }

  update(field) {
    // debugger
    return e => this.setState({ [field]: e.currentTarget.value });
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

  renderRatingStars(category, label) {
    
    return (
        <div className={`review-category`}>
            <label htmlFor={`${category}-rating-input`}>{label}</label>
            <ul className="rating-input" id={`${category}-rating-input`}>
                {[...Array(5)].map((star, idx) => {
                    idx+=1
                    return (
                    <li key={idx}
                        value={idx}
                        className={idx <= (this.state[`${category}Hover`] || this.state[category]) ? "on" : "off"}
                        onClick={this.update(category)}
                        onMouseEnter={() => this.setState({[`${category}Hover`]: idx})}
                        onMouseLeave={() => this.setState({[`${category}Hover`]: this.state[category]})}>
                        <span className="star">&#9733;</span>
                    </li>)
                })}
            </ul>
        </div>
    );
  };

  render() {
    const { formType } = this.props;
    if (!this.state) { return null;}
    return (
        // <h2>Review Form</h2>
        <div className="review-form-container" >
            {/* <div className="right-side" > */}
                <header className="review-form-header">
                    {/* <button onClick={this.props.closeModal} className="close-x">X</button> */}
                    <h1 className="review-form-title">How was your stay at this place?</h1>
                </header>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}

                    <div>
                        {this.renderRatingStars("cleanliness", "Cleanliness")}
                        {this.renderRatingStars("accuracy", "Accuracy")}
                        {this.renderRatingStars("communication", "Communication")}
                        {this.renderRatingStars("location", "Location")}
                        {this.renderRatingStars("checkIn", "Check-in")}
                        {this.renderRatingStars("value", "Value")}
                    </div>

                    <div>
                        <label htmlFor="comment-input">Write a public review </label>
                        <p>Tell future travelers about what they can expect at this place.</p>
                        <textarea  id="comment-input" onChange={this.update("comment")} value={this.state.comment} placeholder="Write a public review">{this.state.comment}</textarea>
                    </div>

                    <div className="buttons-container">
                        <a className="back-nav" onClick={this.props.history.goBack}>{"< "} <span className="underline">Back</span> </a>
                        <br /> 
                        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            {/* </div> */}
            <footer className="review-form-footer">
            </footer>
        </div>
    )
  }
}

export default withRouter(ReviewForm);
