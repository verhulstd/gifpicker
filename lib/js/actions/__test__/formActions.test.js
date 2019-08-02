import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import {
  setInput,
  saveSuggestions,
  clearSuggestions,
  getSuggestions,
} from '../formActions';
import { SET_INPUT, SAVE_SUGGESTIONS, CLEAR_SUGGESTIONS } from '../types';

const mockStore = configureStore([thunk]);
const testResults = { results: ['123', '456'] };
describe('formActions', () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it('should return correct object when calling setInput()', () => {
    expect(setInput('test')).toEqual({
      type: SET_INPUT,
      payload: 'test',
    });
  });
  it('should return correct object when calling saveSuggestions()', () => {
    const arr = [0, 1, 2, 3];
    expect(saveSuggestions(arr)).toEqual({
      type: SAVE_SUGGESTIONS,
      payload: arr,
    });
  });
  it('should return correct object when calling clearSuggestions()', () => {
    expect(clearSuggestions()).toEqual({
      type: CLEAR_SUGGESTIONS,
    });
  });

  it('should dispatch the correct object when axios/api-call is resolved correctly', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: testResults,
      });
    });

    const store = mockStore({
      form: {
        input: 'somevalue',
      },
      settings: {
        apikey: 'xyz',
      },
    });

    const expectedDispatchedActions = [
      {
        type: SAVE_SUGGESTIONS,
        payload: testResults.results,
      },
    ];

    return store.dispatch(getSuggestions()).then(() => {
      expect(store.getActions()).toEqual(expectedDispatchedActions);
    });
  });
});
