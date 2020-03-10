import React, { Component } from "react";

import Dropdown from "react-dropdown";
import { connect } from "react-redux";
import { getResultByCityAction } from "../Redux/Action";
const DropDownOption = ["Chicago", "Boston", "New York"];

export class WeatherTodayUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "Select City"
    };
  }
  onSelectChange = value => {
    this.setState({ selectedOption: value.value });
  };
  getData = async () => {
    await this.props.getResultByCityAction(this.state.selectedOption);
    this.setState({ selectedOption: "Select City" });
  };
  render() {
    console.log(this.state.selectedOption);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 "></div>
          <div className="col-lg-4 ">
            <div className="row">
              <Dropdown
                className="btn btn-transparent"
                options={DropDownOption}
                value={this.state.selectedOption}
                onChange={this.onSelectChange}
              ></Dropdown>
            </div>

            <button className="btn btn-primary mt-2" onClick={this.getData}>
              Know Weather
            </button>
          </div>
        </div>
        <div className="col-lg-4 "></div>

        <div className="row"></div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, { getResultByCityAction })(
  WeatherTodayUI
);
