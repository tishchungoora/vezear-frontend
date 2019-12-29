import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h5 className="pb-2">Search by keyword:</h5>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}
