import React, { Component } from "react";

export default class CategorySelector extends Component {
  render() {
    const { productCategories, filterProducts } = this.props;

    return (
      <div>
        <h5 className="pb-2">Filter by category:</h5>
        <select
          className="form-control"
          id="categorySelector"
          onChange={event => filterProducts(event.target.value)}
        >
          <option value="All">Choose...</option>
          <option value="All">All</option>
          {productCategories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
