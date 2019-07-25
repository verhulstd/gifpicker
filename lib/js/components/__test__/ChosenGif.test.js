import React from 'react';
import { shallow } from 'enzyme';
import { ChosenGif, mapStateToProps, mapDispatchToProps } from '../ChosenGif';

describe('ChosenGif', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ChosenGif />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onClick when the close button gets clicked', () => {
    const onClick = jest.fn().mockName('onClick');
    const wrapper = shallow(<ChosenGif clearChosen={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('input value should have url when it is passed', () => {
    const url = 'xyz';
    const wrapper = shallow(<ChosenGif url={url} />);
    expect(wrapper.find('input').prop('value')).toEqual(url);
  });
  it('images src should have url when it is passed', () => {
    const url = 'xyz';
    const wrapper = shallow(<ChosenGif url={url} />);
    expect(wrapper.find('img').prop('src')).toEqual(url);
  });
  it('mapStateToProps should return the right value', () => {
    const initialState = {
      result: {
        chosen: 'xyz',
      },
    };
    expect(mapStateToProps(initialState).url).toEqual('xyz');
  });
  it('should call dispatch method setChosen correctly', () => {
    const dispatch = jest.fn();
    const mockedEvent = Object.assign(jest.fn(), { preventDefault: () => {} });
    mapDispatchToProps(dispatch).clearChosen(mockedEvent);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'SET_CHOSEN',
      payload: '',
    });
  });
});
