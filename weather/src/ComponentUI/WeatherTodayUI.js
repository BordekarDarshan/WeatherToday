import React, { Component } from "react";
import Dropdown from "react-dropdown";

export class WeatherTodayUI extends Component {
  render() {
    console.log(this.props.selectedCity);

    return (
      <div className="container">
        <div className="row">
          <label>Select City</label>
          <Dropdown
            className="btn btn-dark float-left"
            options={this.props.Options}
            value={this.props.selectedCity}
            onChange={this.props.SelectFunction}
          ></Dropdown>
        </div>
      </div>
    );
  }
}

export default WeatherTodayUI;
