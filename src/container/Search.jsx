import React, { Component } from "react";
import ProductCollection from "./ProductCollection";
import SearchBar from "../component/search/SearchBar";
import CategorySelector from "../component/search/CategorySelector";

const API_ENDPOINT = "http://localhost:3000";

export default class Search extends Component {
  state = {
    productCategories: [],
    products: []
  };

  getProductCategories = () => {
    fetch(`${API_ENDPOINT}/product_categories`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          productCategories: data.sort((a, b) => a.name.localeCompare(b.name))
        })
      );
  };

  getProducts = () => {
    fetch(`${API_ENDPOINT}/products`)
      .then(response => response.json())
      .then(data => this.setState({ products: data.sort((a, b) => a.name.localeCompare(b.name)) }));
  };

  componentDidMount() {
    this.getProductCategories();
    this.getProducts();
  }

  render() {
    const { productCategories } = this.state;

    return (
      <div className="container">
        <div className="row bg-light border m-3 p-3">
          <div className="col p-3">
            <SearchBar />
          </div>
          <div className="col p-3">
            <CategorySelector productCategories={productCategories} />
          </div>
        </div>
        <div className="row p-3">
          <ProductCollection />
        </div>
      </div>
    );
  }
}
