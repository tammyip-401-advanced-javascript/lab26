import React from 'react';
import Footer from '../components/Footer.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('Footer exists', () => {
    let component = shallow(<Footer />);
    expect(component.find('.footer')).toBeDefined();
  });
});