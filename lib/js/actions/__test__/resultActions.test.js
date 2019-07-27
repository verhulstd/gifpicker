import { saveGifs, clearGifs, setChosen } from '../resultActions';
import { SAVE_GIFS, CLEAR_GIFS, SET_CHOSEN } from '../types';

describe('formActions', () => {
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
});
