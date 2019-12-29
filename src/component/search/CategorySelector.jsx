import React, { Component } from "react";

export default class CategorySelector extends Component {
  render() {
    return (
      <div>
        <h5 className="pb-2">Search by category:</h5>
        <select class="form-control" id="categorySelector">
          <option>All</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
      </div>
    );
  }
}
