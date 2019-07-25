// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import { setInput, getSuggestions } from '../actions/formActions';
import { getGifs } from '../actions/resultActions';

type Props = {
  suggestions: string[],
  selectSuggestion: Function,
};

export class Suggestions extends React.Component<Props> {
  render() {
    const { suggestions, selectSuggestion } = this.props;

    return (
      <>
        {suggestions.length > 0 ? (
          <div className="gifpicker__suggestions">
            {suggestions.map((el, i) => {
              const buttonStyle = {
                backgroundColor: randomColor({
                  luminosity: 'light',
                  format: 'rgb', // e.g. 'rgb(225,200,20)'
                }),
              };
              return (
                <button
                  type="button"
                  key={i}
                  style={buttonStyle}
                  className="gifpicker__suggestions__button"
                  onClick={selectSuggestion}
                >
                  {el}
                </button>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}
export const mapStateToProps = state => ({
  suggestions: state.result.suggestions,
});
export const mapDispatchToProps = dispatch => ({
  selectSuggestion: e => {
    dispatch(setInput(e.target.innerText));
    dispatch(getSuggestions());
    dispatch(getGifs());
  },
});
export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(Suggestions);
