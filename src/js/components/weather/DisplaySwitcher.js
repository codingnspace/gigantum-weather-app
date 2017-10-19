//Vendor
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortBy} from 'lodash';
//Locals
import WeatherForm from './WeatherForm';
import Results from './Results';
import {getWeather, resetDecision} from 'js/components/weather/WeatherActions';

class DisplaySwitcher extends Component {
  static propTypes ={
    getWheather: PropTypes.func,
    results: PropTypes.array,
    resetDecision: PropTypes.func
  }

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
export const DisconnectedDisplaySwiter = DisplaySwitcher;
export default connect(mapStateToProps, {
  getWeather,
  resetDecision
})(DisplaySwitcher);
