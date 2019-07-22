// @flow
import initialState from '../store/formState';
import { SET_INPUT } from '../actions/types';

const formReducer = (
  state: Object = initialState,
  { type, payload }: Object
) => {
  switch (type) {
    case SET_INPUT:
      return { ...state, input: payload };
    default:
      return state;
  }
};

export default formReducer;
