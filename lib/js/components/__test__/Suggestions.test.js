import React from 'react';
import { shallow } from 'enzyme';
import {
  Suggestions,
  mapStateToProps,
  mapDispatchToProps,
} from '../Suggestions';

describe('Suggestions', () => {
  it('should match snapshot', () => {
    const suggestions = ['123', '456'];
    const wrapper = shallow(<Suggestions suggestions={suggestions} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onClick when button gets clicked', () => {
    const onClick = jest.fn().mockName('onClick');
    const suggestions = ['123', '456'];
    const wrapper = shallow(
      <Suggestions suggestions={suggestions} selectSuggestion={onClick} />
    );
    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('mapStateToProps should return the right value', () => {
    const initialState = {
      result: { suggestions: '789' },
    };
    expect(mapStateToProps(initialState).suggestions).toEqual('789');
  });
  it('should call dispatch method selectSuggestion correctly', () => {
    const dispatch = jest.fn();
    const mockedEvent = Object.assign(jest.fn(), {
      preventDefault: () => {},
      target: { innerText: 'test' },
    });
    mapDispatchToProps(dispatch).selectSuggestion(mockedEvent);
    expect(dispatch.mock.calls.length).toEqual(3);
  });
});
