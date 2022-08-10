import React from 'react';
import Nouislider from "nouislider-react";

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            minPrice: this.props.minPrice || 0,
            maxPrice: this.props.maxPrice || 499,
            numGuests: this.props.numGuests || 1,
            startDate: this.props.startDate || new Date().toLocaleDateString("en-ca"),
            endDate: this.props.endDate || new Date(new Date().getTime() + ((24+9) * 60 * 60 * 1000)).toLocaleDateString("en-ca"),
            typeOfPlace: this.props.typeOfPlace || [],
            propertyType: this.props.propertyType || [],
            features: this.props.features || [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loading = false;
        this.reset = this.reset.bind(this);
        // this.isUpdating = false;
    }

    handleSubmit(e) {
        e.preventDefault();

    // const review_params = Object.assign({}, this.state);
    // Object.keys(HOVER_STATES).forEach((state) => delete review_params[state]);

        // this.props.updateFilter(this.state)
        //     .then(
        //     review => this.props.history.goBack(),
        //     err => window.scrollTo(0, 0)
        // )

        this.props.updateFilter("maxPrice", this.state.maxPrice)
            .then(() => this.props.updateFilter("minPrice", this.state.minPrice))
            .then(this.props.closeModal)
            .then(()=> this.loading = false)

        this.loading = true;
    }

    update(field, data) {
        // this.isUpdating = true;
        // setTimeout(() => this.isUpdateing = false, 2000);
        
        if (field === "priceRange") {
            return (data) => this.setState({
                minPrice: parseInt(data[0]),
                maxPrice: parseInt(data[1])
            });
        }
        return (e) => this.setState({[field]: e.currentTarget.value});
    };

    reset() {
        this.setState({maxPrice: 499});
        this.setState({minPrice: 0});
        return;
    }

    render() {

        return (
            <div className="filter-form">
                <header className="filter-form-header">
                    <button onClick={this.props.closeModal} className="close-x">X</button>
                    <h2>Filters</h2>
                </header>
                <form onSubmit={this.handleSubmit}>
                    {/* <input id="" type="range" onInput={this.update("maxPrice")} min="0" max="499" value={this.state.maxPrice} className="slider" /> */}

                    <Nouislider className="slider" id="price-range-slider" onSet={this.update("priceRange")} range={{ min: 0, max: 499 }} start={[this.state.minPrice, this.state.maxPrice]}  connect />

                    <div className="price-range-inputs">
                        <div className="min-price-section">
                            <label htmlFor="min-price-input">Min Price: </label>
                            <input type="number" className="price-input" id="min-price-input" onChange={this.update("minPrice")} value={this.state.minPrice} min="0" max="499"/>
                        </div>
                        <span className="range-to"> &#8212; </span>
                        <div className="max-price-section">
                            <label htmlFor="max-price-input">Max Price: </label>
                            <input type="number" className="price-input" id="max-price-input" onChange={this.update("maxPrice")} value={this.state.maxPrice} min="0" max="499"/>
                        </div>
                    </div>
                    <footer className="filter-form-footer">
                        <a className="linkText" onClick={this.reset}>
                            <span >Clear All</span>
                        </a>
                        <button className={`filter-apply-button ${this.loading? "button-unavailable" : ""}`}> Apply</button>
                    </footer>
                </form>
            </div>
        )
    };
}

export default FilterForm;