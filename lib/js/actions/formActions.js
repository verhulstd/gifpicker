import axios from 'axios';
import { SET_INPUT, SAVE_SUGGESTIONS, CLEAR_SUGGESTIONS } from './types';

export const setInput = (str: string): any => ({
  type: SET_INPUT,
  payload: str,
});

export const saveSuggestions = (arr: Array<string>): any => ({
  type: SAVE_SUGGESTIONS,
  payload: arr,
});

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS,
});

export const getSuggestions = () => (dispatch: Function, getState: Function) =>
  axios({
    url: `https://api.tenor.com/v1/search_suggestions?q=${
      getState().form.input
    }&key=${getState().settings.apikey}`,
    method: 'get',
  })
    .then(response => {
      dispatch(saveSuggestions(response.data.results));
    })
    .catch();
