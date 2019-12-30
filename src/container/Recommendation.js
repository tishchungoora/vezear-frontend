import React, { Component } from "react";

export default class Recommendation extends Component {
  state = {
    products: [
      {
        name: "lorem ipsum"
      },
      {
        name: "lorem ipsum"
      },
      {
        name: "lorem ipsum"
      },
      {
        name: "lorem ipsum"
      },
      {
        name: "lorem ipsum"
      }
    ]
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
