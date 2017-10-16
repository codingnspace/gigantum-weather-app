//Vendor
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import { Field, reduxForm } from 'redux-form';
//Locals
import {getWeather} from 'js/components/weather/WeatherActions';

class Weather extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getWeather();
    this.props.handleSubmit((formValues) => {
      console.log(formValues);
    })();
  }

  render () {

    return (
      <form onSubmit={this.handleSubmit}>
        <Field component="input" placeholder="Min Temp" name="minTemp" /><br />
        <Field component="input" placeholder="Max Temp" name="maxTemp" /><br />
        <Field component="input" placeholder="Max Rain Percentage" name="maxRainChance" />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default compose(
  reduxForm({form: 'weather'}),
  connect(null, getWeather)
)(Weather);
