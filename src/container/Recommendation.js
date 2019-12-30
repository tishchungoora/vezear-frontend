import React, { Component } from "react";

export default class Recommendation extends Component {
  state = {
    products: [
      {
        name: "lorem ipsum1"
      },
      {
        name: "lorem ipsum2"
      },
      {
        name: "lorem ipsum3"
      },
      {
        name: "lorem ipsum4"
      },
      {
        name: "lorem ipsum5"
      }
    ]
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.products.map(product => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
