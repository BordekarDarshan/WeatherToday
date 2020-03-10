import React, { Component } from "react";
import { connect } from "react-redux";

import WeatherTodayUI from "../ComponentUI/WeatherTodayUI";
const DropDownOption = ["Chicago", "Boston", "New York"];

export class WeatherToday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: DropDownOption[0]
    };
  }
  onSelectChange = value => {
    this.setState({ selectedOption: value.value });
  };
  render() {
    return (
      <WeatherTodayUI
        selectedCity={this.state.selectedOption}
        Options={DropDownOption}
        SelectFunction={this.onSelectChange}
      ></WeatherTodayUI>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(WeatherToday);
