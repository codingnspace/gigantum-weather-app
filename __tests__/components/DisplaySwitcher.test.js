import { shallowToJson } from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import React from 'react';

import {DisconnectedDisplaySwiter} from 'js/components/weather/DisplaySwitcher';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('DisplaySwitcher', () => {

  it('should display the Results component when results prop array has more than 0 items', () => {
    const results = [{
      idx: 0,
      day: 'Monday',
      decision: 'metro'
    }];
    const output = shallow(
      <DisconnectedDisplaySwiter results={results} getWeather={()=>null} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should display the WeatherForm component when results prop array has 0 items', () => {
    const results = [];
    const output = shallow(
      <DisconnectedDisplaySwiter results={results} getWeather={()=>null} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
