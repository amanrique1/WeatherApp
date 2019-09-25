var require = meteorInstall({"imports":{"api":{"forecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/forecast.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Forecast;
module.link("../imports/api/forecast.js", {
  default(v) {
    Forecast = v;
  }

}, 1);
Meteor.startup(() => {// code to run on server at startup
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvZm9yZWNhc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkZvcmVjYXN0IiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJkZWZhdWx0Iiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsVUFBUSxFQUFDLE1BQUlBO0FBQWQsQ0FBZDtBQUF1QyxJQUFJQyxLQUFKO0FBQVVILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0QsT0FBSyxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsU0FBSyxHQUFDRSxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBRTFDLE1BQU1ILFFBQVEsR0FBRyxJQUFJQyxLQUFLLENBQUNHLFVBQVYsQ0FBcUIsVUFBckIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNGUCxJQUFJQyxNQUFKO0FBQVdQLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0csUUFBTSxDQUFDRixDQUFELEVBQUc7QUFBQ0UsVUFBTSxHQUFDRixDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlILFFBQUo7QUFBYUYsTUFBTSxDQUFDSSxJQUFQLENBQVksNEJBQVosRUFBeUM7QUFBQ0ksU0FBTyxDQUFDSCxDQUFELEVBQUc7QUFBQ0gsWUFBUSxHQUFDRyxDQUFUO0FBQVc7O0FBQXZCLENBQXpDLEVBQWtFLENBQWxFO0FBRzdFRSxNQUFNLENBQUNFLE9BQVAsQ0FBZSxNQUFNLENBQ25CO0FBQ0QsQ0FGRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XHJcblxyXG5leHBvcnQgY29uc3QgRm9yZWNhc3QgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignZm9yZWNhc3QnKTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCBGb3JlY2FzdCBmcm9tICcuLi9pbXBvcnRzL2FwaS9mb3JlY2FzdC5qcyc7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcbn0pO1xuIl19
