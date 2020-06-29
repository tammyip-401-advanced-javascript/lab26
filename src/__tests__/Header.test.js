import React from 'react';
import Header from '../components/Header.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('Header exists', () => {
    let component = shallow(<Header />);
    expect(component.find('.header')).toBeDefined();
  });
});