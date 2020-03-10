import React, { Component } from "react";
import Cloudy from "../Uploads/Cloudy.png";
import Rain from "../Uploads/Rain.png";
import Sunny from "../Uploads/Sunny.png";
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
    return (
      <div className="Back">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="row">
                <div className="col-lg-12">
                  <img src={Cloudy} className="img-fluid"></img>

                  <img src={Rain} className="img-fluid"></img>

                  <img src={Sunny} className="img-fluid"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div
                className="card mt-5 bg-transparent border-white"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <span>
                    <Dropdown
                      className="btn btn-block btn-dark"
                      options={DropDownOption}
                      value={this.state.selectedOption}
                      onChange={this.onSelectChange}
                    ></Dropdown>
                  </span>
                  <button
                    className="btn btn-outline-light mt-3"
                    onClick={this.getData}
                  >
                    Know Weather
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 "></div>

          <div className="row">
            <div className="col-lg-2 "></div>
            <div className="col-lg-8 ">
              <div
                className="card mt-5 bg-transparent border-white"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 "></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    WeatherDataBind: state
  };
};
export default connect(mapStateToProps, { getResultByCityAction })(
  WeatherTodayUI
);
