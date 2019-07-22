// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import {
  setInput,
  getSuggestions,
  clearSuggestions,
} from '../actions/formActions';
import { getGifs } from '../actions/resultActions';

const { Search } = Input;

type Props = {
  dispatchInput: Function,
  dispatchSubmit: Function,
  inputValue: string,
  chosen: string,
};
type State = {};

class SearchForm extends React.Component<Props, State> {
  render() {
    const { dispatchInput, chosen, dispatchSubmit, inputValue } = this.props;
    return (
      <>
        {chosen === '' && (
          <Search
            autoFocus
            placeholder="input search text"
            onSearch={dispatchSubmit}
            onChange={dispatchInput}
            style={{ width: '100%' }}
            value={inputValue}
            className="inputField"
          />
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  apikey: state.settings.apikey,
  inputValue: state.form.input,
  chosen: state.result.chosen,
});
const mapDispatchToProps = dispatch => ({
  dispatchInput: e => {
    const { value } = e.target;
    dispatch(setInput(value));
    if (value.length >= 3) {
      dispatch(getSuggestions());
    } else {
      dispatch(clearSuggestions());
    }
  },
  dispatchSubmit: e => {
    dispatch(setInput(e));
    dispatch(getGifs());
  },
});
export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
