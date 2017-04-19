import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount, render} from 'enzyme';
import jsdomify from 'jsdomify';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('<Index />', function() {

  it('renders correctly', () => {
    const tree = renderer.create(
      <Index />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('initialView is FreeJobs', function() {
    const wrapper = shallow(<Index/>)
    expect(wrapper.state().initialView).toEqual('FreeJobs');
  });

  //maybe a weird test since if this would be an actual app this should probably be 0
  it('items is 4 at start', function() {
    //unclear why but a lot of warnings occurr
    console.error = (error) => error.apply;
    jsdomify.create();
    const wrapper = mount(<Index/>)
    //expect(wrapper.state().items).toEqual([]);
    expect(wrapper.state().items.length).toEqual(4);
  });

  it('items can be incremented', function() {
    //unclear why but a lot of warnings occurr
    console.error = (error) => error.apply;
    jsdomify.create();
    const wrapper = mount(<Index/>)
    //expect(wrapper.state().items).toEqual([]);
    expect(wrapper.state().items.length).toEqual(4);
    wrapper.instance().createItem('Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test');
    expect(wrapper.state().items.length).toEqual(5);
  });
});
