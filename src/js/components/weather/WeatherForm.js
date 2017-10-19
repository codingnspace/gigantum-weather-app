//Vendor
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
//Locals
import temperature from 'images/temperature.svg';
import percent from 'images/percent.svg';

class WeatherForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    getWheather: PropTypes.func
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit((formValues) => {
      this.props.getWeather(formValues);
    })();
  }

  render () {
    return (
      <div className="weather-form-container">
        <h2>Put In Your Conditions</h2>
        <form onSubmit={this.handleSubmit} className="weather-form">
            <div className="input-with-icon">
              <Field component="input" placeholder="Min Temp" name="minTemp" />
              <img className="app-logzzo" src={temperature} alt="app-logo" />
            </div>
            <div className="input-with-icon">
              <Field component="input" placeholder="Max Temp" name="maxTemp" />
              <img className="app-logzzo" src={temperature} alt="app-logo" />
            </div>
            <div className="input-with-icon">
              <Field component="input" placeholder="Max Rain Percentage" name="maxRain" />
              <img className="app-logzzo" src={percent} alt="app-logo" />
            </div>
            <div className="btn-wrapper">
              <button type="submit">Get Info</button>
            </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({form: 'weather'})(WeatherForm);
