// @flow
import { SAVE_KEY } from './types';

export const saveKey = (apikey: string) => ({
  type: SAVE_KEY,
  payload: apikey,
});
