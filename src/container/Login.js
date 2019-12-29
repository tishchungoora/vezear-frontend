import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/user");
    
  };

  render() {
    return (
      <div className="login">
        <div className="login-container mt-5">
          <h2 className="text-center mb-3">Login</h2>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
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
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
