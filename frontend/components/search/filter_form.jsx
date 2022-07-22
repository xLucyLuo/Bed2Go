import React from 'react';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            minPrice: this.props.minPrice ,
            maxPrice: this.props.maxPrice,
            numGuests: this.props.numGuests || 1,
            startDate: this.props.startDate || new Date().toLocaleDateString("en-ca"),
            endDate: this.props.endDate || new Date(new Date().getTime() + ((24+9) * 60 * 60 * 1000)).toLocaleDateString("en-ca"),
            typeOfPlace: this.props.typeOfPlace || [],
            propertyType: this.props.propertyType || [],
            features: this.props.features || [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loading = false;
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

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value});
    };

    reset() {
        this.setState({maxPrice: 1499});
        this.setState({minPrice: 1499});
    }

    render() {

        

        return (
            <div className="filter-form">
                <header className="filter-form-header">
                    <button onClick={this.props.closeModal} className="close-x">X</button>
                    <h2>Filters</h2>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <input id="price-range-slider" type="range" onInput={this.update("maxPrice")} min="0" max="1499" value={this.state.maxPrice} className="slider" />
                    <div className="price-range-inputs">
                        <div className="min-price-section">
                            <label htmlFor="min-price-input">Min Price: </label>
                            <input type="number" className="price-input" id="min-price-input" onChange={this.update("minPrice")} value={this.state.minPrice}/>
                        </div>
                        <span className="range-to"> &#8212; </span>
                        <div className="max-price-section">
                            <label htmlFor="max-price-input">Max Price: </label>
                            <input type="number" className="price-input" id="max-price-input" onChange={this.update("maxPrice")} value={this.state.maxPrice}/>
                        </div>
                    </div>
                    <footer className="filter-form-footer">
                        <p className="linkText" onClick={this.reset}>
                            <span >Clear All</span>
                        </p>
                        <button className={`filter-apply-button ${this.loading? "button-unavailable" : ""}`}> Apply</button>
                    </footer>
                </form>
            </div>
        )
    };
}

export default FilterForm;