import { shallowToJson } from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import React from 'react';

import WeatherForm from 'js/components/weather/WeatherForm';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('WeatherForm', () => {
  it('should render correctly', () => {
    const output = shallow(
      <WeatherForm getWeather={()=>null} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
