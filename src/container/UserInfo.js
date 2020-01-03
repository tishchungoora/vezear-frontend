import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../adapters/API";

class UserInfo extends Component {
  state = {
    fullName: "",
    companyName: "",
    companyIndustry: "",
    companySize: "",
    numberOfEmployees: "",
    yearFounded: "",
    annualRevenue: "",
    businessCategories: []
  };

  setBusinessCategories = () => {
    API.fetchBusinessCategories().then(data =>
      this.setState({
        businessCategories: data
          .filter(category => category.parent_id === null)
          .sort((a, b) => a.name.localeCompare(b.name))
      })
    );
  };

  componentDidMount() {
    this.setBusinessCategories();
  }

  handleChange = (address, i) => {
    const copiedLocations = [...this.state.locations];
    copiedLocations[i].address = address;
    this.setState({ locations: copiedLocations });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/questions");
  };

  render() {
    const {
      fullName,
      companyName,
      companyIndustry,
      companySize,
      numberOfEmployees,
      yearFounded,
      annualRevenue
    } = this.state;

    return (
      <div className="p-5">
        <h1 className="text-center display-4 mb-3">User Information</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="full-name">Full name</label>
            <input
              type="text"
              className="form-control"
              id="full-name"
              placeholder="J. Doe"
              name="fullName"
              onChange={this.handleInputChange}
              value={fullName}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="company-name">Company name</label>
              <input
                type="text"
                className="form-control"
                id="company-name"
                placeholder="Name"
                name="companyName"
                onChange={this.handleInputChange}
                value={companyName}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="industry">Company industry</label>
              <select
                className="custom-select"
                id="industry"
                name="companyIndustry"
                value={companyIndustry}
                onChange={this.handleInputChange}
              >
                {/* Enable options that are applicable */}
                <option selected value="">
                  Choose...
                </option>
                {this.state.businessCategories
                  .filter(category => category.name === "Food & drink")
                  .map(category => (
                    <option
                      unselected="true"
                      key={category.id}
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  ))}

                {/* Disable options that are not applicable */}
                {this.state.businessCategories
                  .filter(category => category.name !== "Food & drink")
                  .map(category => (
                    <option disabled key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="size">Company size</label>
              <input
                type="text"
                className="form-control"
                id="size"
                placeholder="Size"
                name="companySize"
                value={companySize}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="employee">Number of employees</label>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                name="numberOfEmployees"
                value={numberOfEmployees}
                onChange={this.handleInputChange}
              >
                <option selected>Choose...</option>
                <option value="0-10">0-10</option>
                <option value="10-30">10-30</option>
                <option value="30-100">30-100</option>
                <option value="100-250">100-250</option>
                <option value="250+">250+</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="year">Year founded</label>
              <input
                type="text"
                className="form-control"
                id="year"
                placeholder="1999"
                name="yearFounded"
                value={yearFounded}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="revenue">Annual revenue</label>
              <select
                className="custom-select"
                id="revenue"
                name="annualRevenue"
                value={annualRevenue}
                onChange={this.handleInputChange}
              >
                <option selected>Choose...</option>
                <option value="0-500K">0-500K</option>
                <option value="500K-5M">500K-5M</option>
                <option value="5-20M">5-20M</option>
                <option value="20M-80M">20M-80M</option>
                <option value="80M+">80M+</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(UserInfo);
