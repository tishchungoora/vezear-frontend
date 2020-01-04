import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class App extends Component {
  handleSubmit = () => {
    this.props.history.push("/user");
  };

  render() {
    return (
      <div className="App container-fluid">
        <div id="banner" className="row justify-content-center mb-5">
          <div id="banner-logo" className="text-center">
            <div>
              <img
                className="img-fluid"
                src="vezear-white-font.png"
                alt="Banner logo"
              />
            </div>
            <div id="banner-slogan" className="text-center">
              <p className="lead">
                Product & services recommendation engine for companies starting
                up
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <h1 className="display-4">How it works...</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3 text-center">
            <img
              className="instructions img-fluid"
              src="step-1.png"
              alt="Step 1"
            />
            <h5 className="mt-3">STEP 1</h5>
            <p className="lead mt-3">
              Tell us a bit about yourself and your intended business. We take
              your data very seriously and will in no circumstances give your
              information away without your consent.
            </p>
          </div>
          <div className="col-sm-3 text-center">
            <img
              className="instructions img-fluid"
              src="step-2.png"
              alt="Step 2"
            />
            <h5 className="mt-3">STEP 2</h5>
            <p className="lead mt-3">
              Answer our quick survey to help us provide you with the best
              recommendation for products and services that suit your needs.
            </p>
          </div>
          <div className="col-sm-3 text-center">
            <img
              className="instructions img-fluid"
              src="step-3.png"
              alt="Step 3"
            />
            <h5 className="mt-3">STEP 3</h5>
            <p className="lead mt-3">
              Browse our recommended products and services and onboard at a
              click of a button.
            </p>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center m-5">
          <h1 className="display-5 text-info">Ready?</h1>
          <button className="btn btn-info ml-5" onClick={this.handleSubmit}>
            Let's get started...
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
