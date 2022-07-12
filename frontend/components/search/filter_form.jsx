import React from 'react';

class FilterForm extends React.Component {

    update(field) {
        return (e) => this.props.updateFilter(field, parseInt(e.target.value));
    };

    render() {
        return (
            <div>
                <h2>Filters</h2>
                <label htmlFor="min-price-input">Min Price: </label>
                <input type="number" id="min-price-input" onChange={this.update("minPrice")} value={this.props.minPrice}/>
            
                <label htmlFor="max-price-input">Max Price: </label>
                <input type="number" id="max-price-input" onChange={this.update("maxPrice")} value={this.props.maxPrice}/>
            </div>
        )
    };
}

export default FilterForm;