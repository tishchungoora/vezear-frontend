import React, { Component } from "react";
import ProductCollection from "./ProductCollection";
import SearchBar from "../component/search/SearchBar";
import CategorySelector from "../component/search/CategorySelector";
import API from "../adapters/API";

export default class Search extends Component {
  state = {
    productCategories: [],
    displayedProducts: [],
    products: [],
    searchTerm: ""
  };

  setProductCategories = () => {
    API.fetchProductCategories().then(data =>
      this.setState({
        productCategories: data.sort((a, b) => a.name.localeCompare(b.name))
      })
    );
  };

  setProducts = () => {
    API.fetchProducts().then(data =>
      this.setState({
        displayedProducts: data.sort((a, b) => a.name.localeCompare(b.name)),
        products: data
      })
    );
  };

  componentDidMount() {
    this.setProductCategories();
    this.setProducts();
  }

  filterProducts = productCategory => {
    if (productCategory !== "All") {
      this.setState({
        displayedProducts: this.state.products.filter(
          p => p.product_category.name === productCategory
        )
      });
    } else {
      this.setState({ displayedProducts: this.state.products });
    }
  };

  handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value });

  handleSearchSubmit = event => {
    const newProducts = [...this.state.displayedProducts];

    if (this.state.searchTerm === "") {
      this.setState({ displayedProducts: newProducts });
    } else {
      event.preventDefault();
      this.setState({
        displayedProducts: newProducts.filter(p =>
          p.name.toLowerCase().includes(this.state.searchTerm)
        )
      });
    }
  };

  render() {
    const { productCategories, displayedProducts } = this.state;
    const {
      filterProducts,
      handleSearchInputChange,
      handleSearchSubmit
    } = this;

    return (
      <div className="flex-container">
        <div className="row bg-light border m-5 p-3">
          <div className="col p-3">
            <SearchBar
              handleSearchInputChange={handleSearchInputChange}
              handleSearchSubmit={handleSearchSubmit}
            />
          </div>
          <div className="col p-3">
            <CategorySelector
              productCategories={productCategories}
              filterProducts={filterProducts}
            />
          </div>
        </div>
        <div>
          <ProductCollection displayedProducts={displayedProducts} />
        </div>
      </div>
    );
  }
}
