import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const { handleSearchInputChange } = this.props

    return (
      <div>
        <h5 className="pb-2">Search by keyword:</h5>
        <form class="form-inline">
          <input
            className="form-control w-75"
            type="text"
            placeholder="Start typing..."
            aria-label="Search"
            onChange={handleSearchInputChange}
          />
          <button class="btn btn-primary ml-2" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}