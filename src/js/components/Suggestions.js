// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import randomColor from 'randomcolor';
import { setInput, getSuggestions } from '../actions/formActions';
import { getGifs } from '../actions/resultActions';

type Props = {
  suggestions: string[],
  selectSuggestion: Function,
};

class Suggestions extends React.Component<Props> {
  render() {
    const { suggestions, selectSuggestion } = this.props;

    return (
      <>
        {suggestions.length > 0 ? (
          <div className="scrollWrapper">
            {suggestions.map((el, i) => {
              const buttonStyle = {
                cursor: 'pointer',
                backgroundColor: randomColor({
                  luminosity: 'light',
                  format: 'rgb', // e.g. 'rgb(225,200,20)'
                }),
              };
              return (
                <Button key={i} style={buttonStyle} onClick={selectSuggestion}>
                  {el}
                </Button>
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
const mapStateToProps = state => ({
  suggestions: state.result.suggestions,
});
const mapDispatchToProps = dispatch => ({
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
