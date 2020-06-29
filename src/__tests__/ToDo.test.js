import React from 'react';
import ToDo from '../components/ToDo.js';
import ToDoForm from '../components/ToDoForm.js';
import ToDoList from '../components/ToDoList.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Resty', () => {
  it('return correctly', () => {
    let component = shallow(<ToDo />);
    expect(component.find(ToDoForm)).toBeDefined();
    expect(component.find(ToDoList)).toBeDefined();
  });

  it.skip('Submit function works correctly', () => {

    let component = mount(<RESTy />);
    component.instance().onSubmit = jest.fn();

    //simulate clicking the button
    component.find('button').simulate('click', {});
    expect(component.instance().onSubmit).toBeCalled();
  });
});


