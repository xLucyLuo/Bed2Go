import el from 'date-fns/esm/locale/el/index.js';
import React from 'react'
import { withRouter } from 'react-router-dom'
import * as miscUtil from './../../util/misc_util'

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.reservation);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.overlappingDates = ['Select Dates!']
      }

    handleSubmit(e) {
        e.preventDefault();

        if(this.overlappingDates.length > 0){
            document.getElementById('nav-listing-availability').scrollIntoView()
            alert(`Date(s) unavailable! \n${this.overlappingDates.join("\n")}`)
            return
        }

        // debugger
        this.props.submit(this.state)
            .then(
                reservation => this.props.history.push('/trips')
            )
    }

    update(field) {
        // debugger

        const that = this;
        

        return e => {
            // debugger
            if(field==="numGuests" && (
                parseInt(e.currentTarget.value) > this.props.listing.maxGuests || 
                (parseInt(e.currentTarget.value) < 1))) {
                    e.currentTarget.focus()
                    e.currentTarget.select()
                    return
            }

            that.setState({ [field]: e.currentTarget.value })

            // if (field === "startDate" && new Date(e.currentTarget.value) > new Date(that.state.endDate)){
            if (field === "startDate"){
                const startDate = new Date(e.currentTarget.value);
                const endDate = new Date(startDate.getTime() + ((24+9) * 60 * 60 * 1000));
                that.setState({ endDate: endDate.toLocaleDateString('en-ca')});
            }
    };
    }

    handleButtonClick(e, totalPayment){
        // debugger
        // e.preventDefault();

        const { currentUserId, openModal, history, location } = this.props;

        if (currentUserId) {
            this.setState({"payment": totalPayment})
        } else {
            e.preventDefault();
            openModal("login");
        }        
    }

    focusElement(elementId) {
        return () => {
            const el = document.getElementById(elementId);
            el.focus();
            el.select();
        }
    }

    render() {
        
        const { price, priceUnits, otherFees, otherFeesType, maxGuests, additionalGuestCharge} = this.props.listing;
        const { overallRating, countReviews } = this.props;

        const numDays = (new Date(this.state.endDate) - new Date(this.state.startDate) )/ (24 * 60 * 60 * 1000);
        const accomodationTotal = (price +additionalGuestCharge*(this.state.numGuests-1)) * numDays;
        const otherFeesTypeArr = otherFeesType.split(";");
        const otherFeesArr = otherFees.split(";").map((amt) => parseInt(amt));
        const otherFeesTotal = otherFeesArr.map((amt) => amt*numDays);
        const totalPayment = accomodationTotal + otherFeesTotal.reduce((a, b) => a + b, 0);

        const disabledDates = this.props.disabledDates.map((date) =>date.toLocaleDateString('en-ca'))
        // debugger
        const selectedDates = miscUtil.getDaysArray(this.state.startDate, this.state.endDate).map((date) =>date.toLocaleDateString('en-ca'));
        this.overlappingDates = selectedDates.filter(value => disabledDates.includes(value))
        
        // debugger 
        
        return (
            <div className="reservation-form-container" >
            {/* <div className="right-side" > */}
                <header className="reservation-form-header">
                    <h2 className="reservation-form-header-title">
                        {`$${price + additionalGuestCharge*(this.state.numGuests-1)}`} <span className="reservation-price-units"> {` ${priceUnits}`} </span>
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
                        <div className="reservation-checkin-input-container">
                            <label htmlFor="reservation-checkin-input">CHECK-IN</label>
                            <input type="date" className="reservation-input" id="reservation-checkin-input" placeholder="Check-in" value={this.state.startDate} onChange={this.update('startDate')} min={`${new Date().toLocaleDateString('en-ca')}`}/>
                        </div>
                        <div className="reservation-checkout-input-container">
                            <label htmlFor="reservation-checkout-input">CHECKOUT</label>
                            <input type="date" className="reservation-input" id="reservation-checkout-input" placeholder="Check-out" value={this.state.endDate} onChange={this.update('endDate')} min={`${new Date(new Date(this.state.startDate).getTime() + ((24+9) * 60 * 60 * 1000)).toLocaleDateString('en-ca') }`}/>
                        </div>
                        <div className="reservation-guests-input-container" onClick={this.focusElement("reservation-guests-input") }>
                            <label htmlFor="reservation-guests-input">GUESTS</label>
                            <span className="units-suffix">
                                <input type="number" className="reservation-input" id="reservation-guests-input"  value={this.state.numGuests} onChange={this.update('numGuests')} min="1" max={`${maxGuests}`} />
                                <p>{`guest${this.state.numGuests>1 ? "s" : ""}`}</p>
                            </span>
                        </div>
                        {/* <textarea  id="comment-input" onChange={this.update("comment")} value={this.state.comment} placeholder="Write a public reservation">{this.state.comment}</textarea> */}
                    </div>

                    <div className="reservation-buttons-container">
                        <button className={`reservation-button ${this.overlappingDates.length > 0 ? "button-unavailable" : ""}`} onClick={(e) => this.handleButtonClick(e,totalPayment)}>{this.overlappingDates.length > 0 ? "Check Availability" : "Reserve"}</button>
                        <p className="reservation-submit-note">You won't be charged yet</p>
                    </div>
        
                    <div className="reservation-costs-container">
                        <div className="reservation-info">
                            <p className="reservation-info-label">{`$${price} x ${numDays} night${numDays>1 ? "s" : ""}`}</p>
                            <p className="reservation-info-cost">{`$${accomodationTotal.toLocaleString('en-US')}`}</p>
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
                                <p className="reservation-info-label">Total</p>
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

export default withRouter(ReservationForm)