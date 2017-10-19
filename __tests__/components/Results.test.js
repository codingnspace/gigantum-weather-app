import { shallowToJson } from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import React from 'react';

import Results from 'js/components/weather/Results';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('Results', () => {

  it('should render correctly', () => {
    const results = [{
      idx: 0,
      day: 'Monday',
      decision: 'metro'
    }];
    const output = shallow(
      <Results results={results} resetResults={() => null} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
