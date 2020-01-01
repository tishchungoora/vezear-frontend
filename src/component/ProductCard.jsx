import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="card w-25 m-3 shadow">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <em>Category: {product.product_category.name}</em>
          </li>
        </ul>

        <img
          className="card-img-top"
          src={product.image_url}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.description.length > 150
              ? product.description.slice(0, 150) + "..."
              : product.description}
          </p>
        </div>
        <div className="card-body">
          <a href={product.website} target={"_blank"} class="btn btn-info">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
