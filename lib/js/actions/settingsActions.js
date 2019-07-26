// @flow
import { SAVE_KEY, SAVE_SELECT } from './types';

export const saveKey = (apikey: string) => ({
  type: SAVE_KEY,
  payload: apikey,
});
export const saveSelectFunction = (onSelect: Function) => ({
  type: SAVE_SELECT,
  payload: onSelect,
});
