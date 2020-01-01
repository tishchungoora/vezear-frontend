import React, { Component } from "react";

export default class ProductShow extends Component {
  render() {
    const { selectedProduct, goBack } = this.props;
    return (
      <div className="container">
        <div className="row m-5 justify-content-center">
          <button className="btn btn-primary btn-lg btn-arrow-left" onClick={() => goBack()}>
            Back to Products
          </button>
        </div>
        <div className="row m-3">
          <div className="col-md-6 p-3">
            <img
              className="img-fluid img-thumbnail shadow"
              src={selectedProduct.image_url}
              alt={selectedProduct.name}
            />
          </div>
          <div className="col-md-6 p-3">
            <h1 className="display-4">{selectedProduct.name}</h1>
            <p className="text-danger">
              <em>Category: {selectedProduct.product_category.name}</em>
            </p>
            <p>{selectedProduct.description}</p>
            <div className="row m-5 justify-content-center">
              <a
                className="btn btn-info btn-lg"
                href={selectedProduct.website}
                target={"_blank"}
              >
                Onboard
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
