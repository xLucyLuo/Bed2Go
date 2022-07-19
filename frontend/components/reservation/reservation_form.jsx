import { divide } from 'lodash'
import React from 'react'


export default class ReservationForm extends React.Component {
    render() {
        
        
        return (
            <div className="reservation-form-container" >
            {/* <div className="right-side" > */}
                <header className="reservation-form-header">
                    <h2>
                        {'$341'} <span> {' per night'} </span>
                    </h2>
                    <p>
                        <span>
                            <span> &#9733; </span> 
                            <span> {`5.0`|| "New"} </span> 
                            <span> · </span>
                            <a  onClick={() => {document.getElementById('review-index-container').scrollIntoView()}}> 
                                {`${32 || 0} review${32 || 0 >1 ? "s" : ""}`} 
                            </a>
                        </span>
                    </p> 
                </header>
                <form className="reservation-form" onSubmit={this.handleSubmit}>
                    {/* {this.renderErrors()} */}

                    <div className="reservation-inputs-container">
                        {/* <label htmlFor="checkin-input">CHECK-IN </label> */}
                        <input type="date" className="reservation-input" id="reservation-checkin-input" placeholder="Check-in" value={""} onChange={()=>{}} min={`${new Date().toLocaleDateString('en-ca')}`}/>
                        <input type="date" className="reservation-input" id="reservation-checkout-input" placeholder="Check-out" value={""} onChange={()=>{}} min={`${new Date().toLocaleDateString('en-ca')}`}/>
                        <input type="number" className="reservation-input" id="reservation-guests-input" placeholder="Guests" value={1} onChange={()=>{}} min="1" max={`${2}`} />
                        {/* <textarea  id="comment-input" onChange={this.update("comment")} value={this.state.comment} placeholder="Write a public reservation">{this.state.comment}</textarea> */}
                    </div>

                    <div className="reservation-buttons-container">
                        <button className="reservation-button">Reserve</button>
                        {/* <p>You won't be charged yet</p> */}
                    </div>

                    <div className="reservation-costs-container">
                        <div className="reservation-info">
                            <p className="reservation-info-label">Accomodations</p>
                            <p className="reservation-info-cost">$850</p>
                        </div>
                        <div className="reservation-info">
                            <p className="reservation-info-label">Accomodations</p>
                            <p className="reservation-info-cost">$250</p>
                        </div>
                        <div className="reservation-info">
                            <p className="reservation-info-label">Accomodations</p>
                            <p className="reservation-info-cost">$350</p>
                        </div>
                        <div className="reservation-info total">
                                <p className="reservation-info-label">Total</p>
                                <p className="reservation-info-cost">$1,650</p>
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
