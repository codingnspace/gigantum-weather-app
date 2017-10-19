import renderer from 'react-test-renderer';
import Header from 'js/components/Header';
import React from 'react';

/**
* Snapshot testing can be very useful if used correctly, this example just shows how to use
* it but this is not the most useful snapshot, sometimes it is better to call it multiple
* times inside a test and take snapshots of the component changing throughout some interactions,
* Ex. snapshot default state, snapshot after click/mouseover, snapshot after mouseleave
*/
describe('Header snapshot Tests', () => {

  test('should render correctly', () => {
    const header = renderer.create(
      <Header/>
    );
    const tree = header.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
