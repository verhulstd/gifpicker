import {
  setInput,
  saveSuggestions,
  clearSuggestions,
  getSuggestions,
} from '../formActions';
import { SET_INPUT, SAVE_SUGGESTIONS, CLEAR_SUGGESTIONS } from '../types';

describe('formActions', () => {
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
});
