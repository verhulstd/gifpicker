// @flow
import initialState from '../store/settingsState';
import { SAVE_KEY, SAVE_SELECT } from '../actions/types';

const settingsReducer = (
  state: Object = initialState,
  { type, payload }: Object
) => {
  switch (type) {
    case SAVE_KEY:
      return { ...state, apikey: payload };
    case SAVE_SELECT:
      return { ...state, select: payload };
    default:
      return state;
  }
};

export default settingsReducer;
