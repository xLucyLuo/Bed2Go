import React from 'react';
import { withRouter } from 'react-router-dom'


class CheckoutForm extends React.Component {
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

export default withRouter(CheckoutForm);
