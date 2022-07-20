import React from 'react'


export default class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.reservation);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
      }

    handleSubmit(e) {
        e.preventDefault();

        this.props.submit(this.state)
            .then(
                // review => this.props.history.goBack(),
                // err => window.scrollTo(0, 0)
            )
        }

        update(field) {
        // debugger

        const that =this

        return e => {
            that.setState({ [field]: e.currentTarget.value })
            if (field === "startDate" && new Date(e.currentTarget.value) > new Date(that.state.endDate)){
                const startDate = new Date(e.currentTarget.value)
                const endDate = new Date(startDate.getTime() + ((24+7) * 60 * 60 * 1000))
                that.setState({ endDate: endDate.toLocaleDateString('en-ca')})
            }
        };
    }

    render() {
        
        const { price, priceUnits, otherFees, otherFeesType, maxGuests} = this.props.listing;
        const { overallRating, countReviews } = this.props;

        const numDays = (new Date(this.state.endDate) - new Date(this.state.startDate) )/ (24 * 60 * 60 * 1000);
        const accomodationTotal = price * numDays;
        const otherFeesTypeArr = otherFeesType.split(";");
        const otherFeesArr = otherFees.split(";").map((amt) => parseInt(amt));
        const otherFeesTotal = otherFeesArr.map((amt) => amt*numDays);
        const totalPayment = accomodationTotal + otherFeesTotal.reduce((a, b) => a + b, 0);
        // this.setState({"payment": totalPayment})
        // debugger 
        
        return (
            <div className="reservation-form-container" >
            {/* <div className="right-side" > */}
                <header className="reservation-form-header">
                    <h2 reservation-form-header-title>
                        {`$${price}`} <span className="reservation-price-units"> {` ${priceUnits}`} </span>
                    </h2>
                    <p className="reservation-review-summary">
                        <span>
                            <span> &#9733; </span> 
                            <span> {`${ overallRating || "New" }`} </span> 
                            <span> · </span>
                            <a  onClick={() => {document.getElementById('review-index-container').scrollIntoView()}}> 
                                {`${countReviews || 0} review${countReviews>1 ? "s" : ""}`} 
                            </a>
                        </span>
                    </p> 
                </header>
                <form className="reservation-form" onSubmit={this.handleSubmit}>
                    {/* {this.renderErrors()} */}

                    <div className="reservation-inputs-container">
                        {/* <label htmlFor="checkin-input">CHECK-IN </label> */}
                        <input type="date" className="reservation-input" id="reservation-checkin-input" placeholder="Check-in" value={this.state.startDate} onChange={this.update('startDate')} min={`${new Date().toLocaleDateString('en-ca')}`}/>
                        <input type="date" className="reservation-input" id="reservation-checkout-input" placeholder="Check-out" value={this.state.endDate} onChange={this.update('endDate')} min={`${this.state.startDate}`}/>
                        <input type="number" className="reservation-input" id="reservation-guests-input" placeholder="Guests" value={this.state.numGuests} onChange={this.update('numGuests')} min="1" max={`${maxGuests}`} />
                        {/* <textarea  id="comment-input" onChange={this.update("comment")} value={this.state.comment} placeholder="Write a public reservation">{this.state.comment}</textarea> */}
                    </div>

                    <div className="reservation-buttons-container">
                        <button className="reservation-button">Reserve</button>
                        <p className="reservation-submit-note">You won't be charged yet</p>
                    </div>
        
                    <div className="reservation-costs-container">
                        <div className="reservation-info">
                            <p className="reservation-info-label">{`$${price} x ${numDays} night${numDays>1 ? "s" : ""}`}</p>
                            <p className="reservation-info-cost">{`$${accomodationTotal}`}</p>
                        </div>
                        {
                            otherFeesTotal.map((feeTotal, idx) => (
                                <div className="reservation-info" key={idx}>
                                    <p className="reservation-info-label">{otherFeesTypeArr[idx]}</p>
                                    <p className="reservation-info-cost">{`$${feeTotal.toLocaleString('en-US')}`}</p>
                                </div>
                            ))
                        }
                        <div className="reservation-info total">
                                <p className="reservation-info-label">Total before taxes</p>
                                <p className="reservation-info-cost" onChange={this.update('payment')} value={totalPayment}>{`$${totalPayment.toLocaleString('en-US')}`}</p>
                        </div>
                    </div>


                </form>
            {/* </div> */}
            <footer className="reservation-form-footer">
            </footer>
        </div>
        )
    }
}
