import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";
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
    locations: [
      {
        address: ""
      }
    ],
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

  handleAddLocation = () => {
    this.setState({
      locations: [
        {
          address: ""
        },
        ...this.state.locations
      ]
    });
  };

  handleChange = (address, i) => {
    const copiedLocations = [...this.state.locations];
    copiedLocations[i].address = address;
    this.setState({ locations: copiedLocations });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
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
            <label for="full-name">Full name</label>
            <input
              type="text"
              className="form-control"
              id="full-name"
              placeholder="John Doe"
              name="fullName"
              onChange={this.handleInputChange}
              value={fullName}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="company-name">Company name</label>
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
              <label for="industry">Company industry</label>
              <select
                className="custom-select"
                id="industry"
                name="companyIndustry"
                value={companyIndustry}
                onChange={this.handleInputChange}
              >
                {/* Enable options that are applicable */}
                <option selected value="">Choose...</option>
                {this.state.businessCategories
                  .filter(category => category.name === "Food & drink")
                  .map(category => (
                    <option unselected="true" key={category.id} value={category.name}>
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
              <label for="size">Company size</label>
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
              <label for="employee">Number of employees</label>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                name="numberOfEmployees"
                value={numberOfEmployees}
                onChange={this.handleInputChange}
              >
                <option selected>Choose...</option>
                <option value="1">0-10</option>
                <option value="2">10-30</option>
                <option value="3">30-100</option>
                <option value="3">100-250</option>
                <option value="3">250+</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="year">Year founded</label>
              <input
                type="text"
                className="form-control"
                id="year"
                placeholder="1999 "
                name="yearFounded"
                value={yearFounded}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="revenue">Annual revenue</label>
              <select
                className="custom-select"
                id="revenue"
                name="annualRevenue"
                value={annualRevenue}
                onChange={this.handleInputChange}
              >
                <option selected>Choose...</option>
                <option value="1">0-500K</option>
                <option value="2">500K-5M</option>
                <option value="3">5-20M</option>
                <option value="3">20M-80M</option>
                <option value="3">80M+</option>
              </select>
            </div>
          </div>

          <div>
            <p>
              Is your business operating in a single location or multiple
              locations?{" "}
            </p>
            {/* <div className="d-flex">
              <div class="form-check mr-5">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  Single
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Multiple
                </label>
              </div>
            </div> */}

            <p className="mt-3">
              Please Enter the zipcode in which your business is operating
            </p>
            <form class="">
              {this.state.locations.map((location, i) => (
                <div className="d-flex">
                  <div class="form-group mb-2">
                    <input
                      type="text"
                      class="form-control"
                      id="staticEmail2"
                      placeholder="Zip code"
                    />
                  </div>
                  <PlacesAutocomplete
                    value={location.address}
                    onChange={address => this.handleChange(address, i)}
                    onSelect={this.handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading
                    }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: "Search Places ...",
                            className: "location-search-input form-control ml-3"
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div className="ml-3">Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer"
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                  cursor: "pointer"
                                };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </div>
              ))}
              <button
                onClick={e => {
                  e.preventDefault();
                  this.handleAddLocation();
                }}
                class="btn btn-secondary mb-2"
              >
                Add Another location
              </button>
            </form>
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
