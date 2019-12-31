import React, { Component } from "react";
import ProductCard from "../component/search/ProductCard";

export default class ProductCollection extends Component {
  render() {
    const { displayedProducts } = this.props;

    return (
      <div className="row justify-content-center">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
