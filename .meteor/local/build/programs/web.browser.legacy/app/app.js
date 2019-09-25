var require = meteorInstall({"imports":{"api":{"forecast.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/api/forecast.js                                                                     //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
module.export({
  Forecast: function () {
    return Forecast;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Forecast = new Mongo.Collection('forecast');
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"DayForecast.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/ui/DayForecast.js                                                                   //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return DayForecast;
  }
});
var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);

var DayForecast =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(DayForecast, _Component);

  function DayForecast() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DayForecast.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        className: "col-sm"
      }, React.createElement("p", null, this.props.report.dayName), React.createElement("p", null, this.props.report.minTemp), React.createElement("p", null, this.props.report.maxTemp), React.createElement("p", null, this.props.report.status));
    }

    return render;
  }();

  return DayForecast;
}(Component);
/////////////////////////////////////////////////////////////////////////////////////////////////

},"MonthForecast.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/ui/MonthForecast.js                                                                 //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 1);
var Forecast;
module.link("../api/forecast.js", {
  Forecast: function (v) {
    Forecast = v;
  }
}, 2);
var WeekForecast;
module.link("./WeekForecast.js", {
  "default": function (v) {
    WeekForecast = v;
  }
}, 3);

var MonthForecast =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(MonthForecast, _Component);

  function MonthForecast() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MonthForecast.prototype;

  _proto.renderWeeks = function () {
    function renderWeeks() {
      var fore = this.props.forecast;
      var tam = fore.length;
      var i = 0;

      while (i < tam) {
        var week = [];

        for (var j = 0; j < 7 && i < tam; j++) {
          week.push(fore[i]);
          i++;
        }

        return React.createElement(WeekForecast, {
          key: i % 7
        });
      }
    }

    return renderWeeks;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "row"
      }, this.renderWeeks()));
    }

    return render;
  }();

  return MonthForecast;
}(Component);

module.exportDefault(withTracker(function () {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(MonthForecast));
/////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekForecast.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/ui/WeekForecast.js                                                                  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 1);
var Forecast;
module.link("../api/forecast.js", {
  Forecast: function (v) {
    Forecast = v;
  }
}, 2);
var DayForecast;
module.link("./DayForecast.js", {
  "default": function (v) {
    DayForecast = v;
  }
}, 3);

var WeekForecast =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(WeekForecast, _Component);

  function WeekForecast() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WeekForecast.prototype;

  _proto.renderDays = function () {
    function renderDays() {
      return this.props.forecast.map(function (d) {
        return React.createElement(DayForecast, {
          key: d._id,
          report: d
        });
      });
    }

    return renderDays;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "row"
      }, this.renderDays()));
    }

    return render;
  }();

  return WeekForecast;
}(Component);

module.exportDefault(withTracker(function () {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(WeekForecast));
/////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/main.js                                                                              //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var render;
module.link("react-dom", {
  render: function (v) {
    render = v;
  }
}, 2);
module.link("react-bootstrap");
var MonthForecast;
module.link("../imports/ui/MonthForecast.js", {
  "default": function (v) {
    MonthForecast = v;
  }
}, 3);
Meteor.startup(function () {
  render(React.createElement(MonthForecast, null), document.getElementById("root"));
});
/////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");