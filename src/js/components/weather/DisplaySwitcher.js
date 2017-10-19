//Vendor
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortBy} from 'lodash';
//Locals
import WeatherForm from './WeatherForm';
import Results from './Results';
import {getWeather, resetDecision} from 'js/components/weather/WeatherActions';

class DisplaySwitcher extends Component {
  render () {
    const {results} = this.props;
    let display;
    if (results && results.length > 0) {
      display = <Results results={results} resetResults={this.props.resetDecision} />;
    } else {
      display = <WeatherForm getWeather={this.props.getWeather} />;
    }
    return (
      <div className="display-switcher">
        {display}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: sortBy(state.weatherReducer, 'idx')
  };
}
export default connect(mapStateToProps, {
  getWeather,
  resetDecision
})(DisplaySwitcher);
