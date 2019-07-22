// @flow
import axios from 'axios';
import { SAVE_GIFS, CLEAR_GIFS, SET_CHOSEN } from './types';

export const saveGifs = (arr: Array<string>): Object => ({
  type: SAVE_GIFS,
  payload: arr,
});

export const getGifs = () => (dispatch: Function, getState: Function) => {
  axios
    .get(
      `https://api.tenor.com/v1/search?q=${getState().form.input}&key=${
        getState().settings.apikey
      }`
    )
    .then(response => {
      dispatch(saveGifs(response.data.results));
    })
    .catch();
};

export const clearGifs = () => ({
  type: CLEAR_GIFS,
});

export const setChosen = (url: string) => ({
  type: SET_CHOSEN,
  payload: url,
});
