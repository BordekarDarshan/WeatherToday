import React, { Component } from "react";
import Dropdown from "react-dropdown";
const options = ["Chicago", "Boston", "New York"];

export class WeatherTodayUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: options[0]
    };
  }
  onSelectChange = value => {
    this.setState({ selectedOption: value.value });
  };
  render() {
    console.log(this.state.selectedOption);

    return (
      <div className="container">
        <div className="row">
          <label>Select City</label>
          <Dropdown
            className="btn btn-dark float-left"
            options={options}
            value={this.state.selectedOption}
            onChange={this.onSelectChange}
          ></Dropdown>
        </div>
      </div>
    );
  }
}

export default WeatherTodayUI;
