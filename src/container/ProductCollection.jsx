import React, { Component } from "react";
import ProductCard from "../component/ProductCard";

export default class ProductCollection extends Component {
  render() {
    const { displayedProducts, showProduct } = this.props;

    return (
      <div className="row justify-content-center">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} showProduct={showProduct} />
        ))}
      </div>
    );
  }
}
