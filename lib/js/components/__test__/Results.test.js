import React from 'react';
import { shallow } from 'enzyme';
import { Results, mapStateToProps, mapDispatchToProps } from '../Results';

describe('Results', () => {
  it('should match snapshot', () => {
    const results = [
      { id: 1, media: [{ gif: { url: 'test1' }, tinygif: { url: 'test1' } }] },
      { id: 2, media: [{ gif: { url: 'test2' }, tinygif: { url: 'test2' } }] },
      { id: 3, media: [{ gif: { url: 'test3' }, tinygif: { url: 'test3' } }] },
    ];
    const wrapper = shallow(<Results results={results} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onClick when button gets clicked', () => {
    const onClick = jest.fn().mockName('onClick');
    const results = [
      { id: 1, media: [{ gif: { url: 'test1' }, tinygif: { url: 'test1' } }] },
      { id: 2, media: [{ gif: { url: 'test2' }, tinygif: { url: 'test2' } }] },
      { id: 3, media: [{ gif: { url: 'test3' }, tinygif: { url: 'test3' } }] },
    ];
    const wrapper = shallow(
      <Results chooseGif={onClick} results={results} select={() => {}} />
    );
    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('mapStateToProps should return the right value', () => {
    const initialState = {
      result: {
        results: [
          {
            id: 1,
            media: [{ gif: { url: 'test1' }, tinygif: { url: 'test1' } }],
          },
          {
            id: 2,
            media: [{ gif: { url: 'test2' }, tinygif: { url: 'test2' } }],
          },
          {
            id: 3,
            media: [{ gif: { url: 'test3' }, tinygif: { url: 'test3' } }],
          },
        ],
      },
      settings: {
        select: () => {},
      },
    };
    expect(mapStateToProps(initialState).results[0].media[0].gif.url).toEqual(
      'test1'
    );
  });
  it('should call dispatch method chooseGif correctly', () => {
    const dispatch = jest.fn();
    const mockedEvent = Object.assign(jest.fn(), {
      preventDefault: () => {},
      target: { dataset: { url: 'test' } },
    });
    mapDispatchToProps(dispatch).chooseGif(mockedEvent);
    expect(dispatch.mock.calls).toEqual([
      [{ type: 'CLEAR_SUGGESTIONS' }],
      [{ type: 'CLEAR_GIFS' }],
      [{ type: 'SET_INPUT', payload: '' }],
      [{ type: 'SET_CHOSEN', payload: 'test' }],
    ]);
  });
});
