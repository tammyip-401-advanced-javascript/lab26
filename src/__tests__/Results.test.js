import React from 'react';
import Results from '../components/Results.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Results', () => {
  it('results field exists', () => {
    let component = shallow(<Results />);
    expect(component.find('.results')).toBeDefined();
  });
});