import React, { Component } from "react";
import Products from "./Products"

export default class Recommendation extends Component {
  state = {}

  render() {
    return (
      <div className="flex-container">
        <h1 className="display-4 text-center mt-5">Recommendations</h1>
        <Products />
      </div>
    );
  }
}
