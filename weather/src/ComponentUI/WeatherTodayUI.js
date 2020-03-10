import React, { Component } from "react";
import Dropdown from "react-dropdown";
import { connect } from "react-redux";
import { getResultByCityAction } from "../Redux/Action";

export class WeatherTodayUI extends Component {
  getData = () => {
    this.props.getResultByCityAction(this.props.selectedCity);
  };
  render() {
    console.log(this.props.selectedCity);

    return (
      <div className="container">
        <div className="row">
          <label>Select City.....</label>
          <Dropdown
            className="btn btn-dark float-left"
            options={this.props.Options}
            value={this.props.selectedCity}
            onChange={this.props.SelectFunction}
          ></Dropdown>
          <button onClick={this.getData}>Click </button>
        </div>

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
