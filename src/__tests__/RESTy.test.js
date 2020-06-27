import React from 'react';
import RESTy from '../components/RESTy.js';
import Form from '../components/Form.js';
import Results from '../components/Results.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Resty', () => {
  it('render correctly', () => {
    let component = shallow(<RESTy />);
    expect(component.find(Form)).toBeDefined();
    expect(component.find(Results)).toBeDefined();
  });

  it.skip('Submit function works correctly', () => {

    let component = mount(<RESTy />);
    component.instance().onSubmit = jest.fn();

    //simulate clicking the button
    component.find('button').simulate('click', {});
    expect(component.instance().onSubmit).toBeCalled();
  });
});


