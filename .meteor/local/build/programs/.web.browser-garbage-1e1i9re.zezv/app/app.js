var require = meteorInstall({"imports":{"api":{"forecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/forecast.js                                                           //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.export({
  Forecast: () => Forecast
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Forecast = new Mongo.Collection('forecast');
///////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"DayForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/ui/DayForecast.js                                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.export({
  default: () => DayForecast
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);

class DayForecast extends Component {
  render() {
    return React.createElement("div", {
      className: "col-sm"
    }, React.createElement("p", null, this.props.report.dayName), React.createElement("p", null, this.props.report.minTemp), React.createElement("p", null, this.props.report.maxTemp), React.createElement("p", null, this.props.report.status));
  }

}
///////////////////////////////////////////////////////////////////////////////////////

},"MonthForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/ui/MonthForecast.js                                                       //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let Forecast;
module.link("../api/forecast.js", {
  Forecast(v) {
    Forecast = v;
  }

}, 2);
let WeekForecast;
module.link("./WeekForecast.js", {
  default(v) {
    WeekForecast = v;
  }

}, 3);

class MonthForecast extends Component {
  renderWeeks() {
    let fore = this.props.forecast;
    let tam = fore.length;
    let i = 0;

    while (i < tam) {
      let week = [];

      for (var j = 0; j < 7 && i < tam; j++) {
        week.push(fore[i]);
        i++;
      }

      return React.createElement(WeekForecast, {
        key: i % 7
      });
    }
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "row"
    }, this.renderWeeks()));
  }

}

module.exportDefault(withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(MonthForecast));
///////////////////////////////////////////////////////////////////////////////////////

},"WeekForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/ui/WeekForecast.js                                                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let Forecast;
module.link("../api/forecast.js", {
  Forecast(v) {
    Forecast = v;
  }

}, 2);
let DayForecast;
module.link("./DayForecast.js", {
  default(v) {
    DayForecast = v;
  }

}, 3);

class WeekForecast extends Component {
  renderDays() {
    return this.props.forecast.map(d => React.createElement(DayForecast, {
      key: d._id,
      report: d
    }));
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "row"
    }, this.renderDays()));
  }

}

module.exportDefault(withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(WeekForecast));
///////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/main.js                                                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
module.link("react-bootstrap");
let MonthForecast;
module.link("../imports/ui/MonthForecast.js", {
  default(v) {
    MonthForecast = v;
  }

}, 3);
Meteor.startup(() => {
  render(React.createElement(MonthForecast, null), document.getElementById("root"));
});
///////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");