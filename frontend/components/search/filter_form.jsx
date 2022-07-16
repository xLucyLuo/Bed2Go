import React from 'react';

class FilterForm extends React.Component {

    update(field) {
        return (e) => this.props.updateFilter(field, parseInt(e.target.value));
    };

    render() {
        return (
            <div className="filter-form">
                <h2>Filters</h2>
                <input id="price-range-slider" type="range" onInput={this.update("maxPrice")} min="0" max="1499" value={this.props.maxPrice} className="slider" />
                <div className="price-range-inputs">
                    <div className="min-price-section">
                        <label htmlFor="min-price-input">Min Price: </label>
                        <input type="number" className="price-input" id="min-price-input" onChange={this.update("minPrice")} value={this.props.minPrice}/>
                    </div>
                    <span className="range-to"> &#8212; </span>
                    <div className="max-price-section">
                        <label htmlFor="max-price-input">Max Price: </label>
                        <input type="number" className="price-input" id="max-price-input" onChange={this.update("maxPrice")} value={this.props.maxPrice}/>
                    </div>
                </div>
            </div>
        )
    };
}

export default FilterForm;