import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { saveGifs, clearGifs, setChosen, getGifs } from '../resultActions';
import { SAVE_GIFS, CLEAR_GIFS, SET_CHOSEN } from '../types';

const testResults = {
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
};
describe('formActions', () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it('should return correct object when calling saveGifs()', () => {
    const arr = ['1', '2', '3', '4'];
    expect(saveGifs(arr)).toEqual({
      type: SAVE_GIFS,
      payload: arr,
    });
  });
  it('should return correct object when calling clearGifs()', () => {
    expect(clearGifs()).toEqual({
      type: CLEAR_GIFS,
    });
  });
  it('should return correct object when calling setChosen()', () => {
    expect(setChosen('url')).toEqual({
      type: SET_CHOSEN,
      payload: 'url',
    });
  });
  it('should dispatch the correct object after getting api-call', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: testResults,
      });
    });
    const expectedDispatchedActions = [
      {
        type: SAVE_GIFS,
        payload: testResults.results,
      },
    ];
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      form: {
        input: 'somevalue',
      },
      settings: {
        apikey: 'xyz',
      },
    });
    return store.dispatch(getGifs()).then(() => {
      expect(store.getActions()).toEqual(expectedDispatchedActions);
    });
  });
});
