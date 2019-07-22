// @flow
import initialState from '../store/resultState';
import {
  SAVE_SUGGESTIONS,
  CLEAR_SUGGESTIONS,
  SAVE_GIFS,
  CLEAR_GIFS,
  SET_CHOSEN,
} from '../actions/types';

const resultReducer = (
  state: Object = initialState,
  { type, payload }: Object
) => {
  switch (type) {
    case SAVE_SUGGESTIONS:
      return { ...state, suggestions: payload };
    case CLEAR_SUGGESTIONS:
      return { ...state, suggestions: [] };
    case SAVE_GIFS:
      return { ...state, results: payload };
    case CLEAR_GIFS:
      return { ...state, results: [] };
    case SET_CHOSEN:
      return { ...state, chosen: payload };
    default:
      return state;
  }
};

export default resultReducer;
