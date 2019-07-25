import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from '../SearchForm';

describe('SearchForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onSubmit when form is submitted', () => {
    const onClick = jest.fn().mockName('onClick');
    const wrapper = shallow(<SearchForm dispatchSubmit={onClick} chosen="" />);
    wrapper.find('form').simulate('submit');
    expect(onClick).toHaveBeenCalled();
  });
  it('should call onChange when input gets changed', () => {
    const onChange = jest.fn().mockName('onClick');
    const wrapper = shallow(<SearchForm dispatchInput={onChange} chosen="" />);
    wrapper.find('.gifpicker__input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
  it('mapStateToProps should return the right value', () => {
    const initialState = {
      settings: { apikey: '123' },
      form: { input: '456' },
      result: { chosen: '789' },
    };
    expect(mapStateToProps(initialState).chosen).toEqual('789');
  });
  it('should call dispatch method dispatchInput correctly', () => {
    const dispatch = jest.fn();
    const mockedEvent = Object.assign(jest.fn(), {
      preventDefault: () => {},
      target: { value: 'test' },
    });
    mapDispatchToProps(dispatch).dispatchInput(mockedEvent);
    expect(dispatch.mock.calls.length).toEqual(2);
  });
  it('should call dispatch method dispatchSubmit correctly', () => {
    const dispatch = jest.fn();
    const mockedEvent = Object.assign(jest.fn(), {
      preventDefault: () => {},
    });
    mapDispatchToProps(dispatch).dispatchSubmit(mockedEvent);
    expect(dispatch.mock.calls.length).toEqual(1);
  });
});
