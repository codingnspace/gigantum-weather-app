import { shallowToJson } from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import React from 'react';

import DisplaySwitcher from 'js/components/weather/DisplaySwitcher';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('DisplaySwitcher', () => {
  it('should render correctly', () => {
    const output = shallow(
      <DisplaySwitcher />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
