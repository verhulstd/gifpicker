// @flow
import initialState from '../store/settingsState';
import { SAVE_KEY } from '../actions/types';

const settingsReducer = (
  state: Object = initialState,
  { type, payload }: Object
) => {
  switch (type) {
    case SAVE_KEY:
      return { ...state, apikey: payload };
    default:
      return state;
  }
};

export default settingsReducer;
