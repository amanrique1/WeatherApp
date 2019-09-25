import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import WeekForecast from "./WeekForecast.js";

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
            return(<WeekForecast key={i%7} />
            );

        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderWeeks()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        forecast: Forecast.find({}).fetch(),
    };
})(MonthForecast);