// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  setInput,
  getSuggestions,
  clearSuggestions,
} from '../actions/formActions';
import { getGifs } from '../actions/resultActions';

type Props = {
  dispatchInput: Function,
  dispatchSubmit: Function,
  inputValue: string,
  chosen: string,
};
type State = {};

export class SearchForm extends React.Component<Props, State> {
  render() {
    const { dispatchInput, chosen, dispatchSubmit, inputValue } = this.props;
    return (
      <>
        {chosen === '' && (
          <form action="" onSubmit={dispatchSubmit}>
            <button type="submit" className="gifpicker__submit"></button>
            <input
              placeholder="input search text"
              onChange={dispatchInput}
              value={inputValue}
              className="gifpicker__input"
            />
          </form>
        )}
      </>
    );
  }
}
export const mapStateToProps = (state: Object) => ({
  apikey: state.settings.apikey,
  inputValue: state.form.input,
  chosen: state.result.chosen,
});
export const mapDispatchToProps = (dispatch: Function) => ({
  dispatchInput: (e: Object) => {
    const { value } = e.target;
    dispatch(setInput(value));
    if (value.length >= 3) {
      dispatch(getSuggestions());
    } else {
      dispatch(clearSuggestions());
    }
  },
  dispatchSubmit: (e: Object) => {
    e.preventDefault();
    dispatch(getGifs());
  },
});
export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
