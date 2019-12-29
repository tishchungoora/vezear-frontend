import React, { Component } from "react";

export default class CategorySelector extends Component {
  render() {
    const { productCategories } = this.props;

    return (
      <div>
        <h5 className="pb-2">Filter by category:</h5>
        <select class="form-control" id="categorySelector">
          <option>All</option>
          {productCategories.map(category => <option key={category.id}>{category.name}</option>)}
        </select>
      </div>
    );
  }
}
