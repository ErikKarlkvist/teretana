import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Index', () => {
  it('has correct number of jobs', () => {
    const app = renderer.create(
      <Index />
    );
    let tree = app.toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree.children);
    tree.props._testAddItem();

    tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
