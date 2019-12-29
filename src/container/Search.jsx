import React, { Component } from "react";
import ProductCollection from "./ProductCollection";
import SearchBar from "../component/search/SearchBar";
import CategorySelector from "../component/search/CategorySelector";

export default class Search extends Component {
  render() {
    return (
      <div className="container">
          <div className="row bg-light border m-3 p-3">
            <div className="col p-3">
                <SearchBar />
            </div>
            <div className="col p-3">
                <CategorySelector />
            </div>
          </div>
          <div className="row p-3">
            <ProductCollection />
          </div>
      </div>
    );
  }
}
