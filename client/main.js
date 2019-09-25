import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import 'react-bootstrap';
 
import MonthForecast from "../imports/ui/MonthForecast.js";
 
Meteor.startup(() => {
  render(<MonthForecast />, document.getElementById("root"));
});