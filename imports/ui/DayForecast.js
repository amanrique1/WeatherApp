import React, { Component } from 'react';
 
export default class DayForecast extends Component {
  render() {
    return (
      <div className="col-sm">
        <p>{this.props.report.dayName}</p>
        <p>{this.props.report.minTemp}</p>
        <p>{this.props.report.maxTemp}</p>
        <p>{this.props.report.status}</p>
      </div>
    );
  }
}