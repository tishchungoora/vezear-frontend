import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="login">
        <div className="login-container mt-5">
          <h2 className="text-center mb-3">Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                this.props.history.push("/user");
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
