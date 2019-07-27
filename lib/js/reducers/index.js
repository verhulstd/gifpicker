// @flow
import { combineReducers } from 'redux';
import formReducer from './formReducer';
import resultReducer from './resultReducer';
import settingsReducer from './settingsReducer';

const reducers: Object = combineReducers({
  form: formReducer,
  result: resultReducer,
  settings: settingsReducer,
});

export default reducers;
