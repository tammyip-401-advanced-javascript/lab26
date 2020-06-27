import React from 'react';
import Form from '../components/Form.js';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultMockProps = {
  url: 'abc',
  onURLChange: () => { },
  onMethodChange: () => { },
  onSubmit: () => { }
}

describe('Form', () => {
  it('renders correctly', () => {
    const component = mount(<Form {...defaultMockProps} />);

    // console.log(component.find('input').html())
    expect(component.find('input').prop('value')).toBe(defaultMockProps.url);
    // console.log(component.find('button').text())
    expect(component.find('button').text()).toBe('Submit');
    expect(component.find('option').at(0).prop('value')).toBe('GET');
    expect(component.find('option').at(1).prop('value')).toBe('POST');
    expect(component.find('option').at(2).prop('value')).toBe('PUT');
    expect(component.find('option').at(3).prop('value')).toBe('DELETE');
    expect(component.find('option').at(4).prop('value')).toBe('PATCH');
  });

  it('trigger onURLChange correctly', () => {
    const mockOnURLChange = jest.fn();
    const component = mount(
      <Form {...defaultMockProps} onURLChange={mockOnURLChange} />);

    component.find('input').simulate('change', {});
    expect(mockOnURLChange).toBeCalled();
  });

  it('trigger onMethodChange correctly', () => {
    const mockOnMethodChange = jest.fn();
    const component = mount(
      <Form {...defaultMockProps} onMethodChange={mockOnMethodChange} />);

    component.find('select').simulate('change', {});
    expect(mockOnMethodChange).toBeCalled();
  });

  it('trigger onSubmit correctly', () => {
    const mockOnSubmit = jest.fn();
    const component = mount(
      <Form {...defaultMockProps} onSubmit={mockOnSubmit} />);

    component.find('button').simulate('click', {});
    expect(mockOnSubmit).toBeCalled();

  });
});
