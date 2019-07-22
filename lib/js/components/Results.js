// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { clearGifs, setChosen } from '../actions/resultActions';
import { clearSuggestions, setInput } from '../actions/formActions';

type Props = {
  results: any,
  chooseGif: any,
};
type State = {};

class Results extends React.Component<Props, State> {
  render() {
    const { results, chooseGif } = this.props;
    return (
      <>
        {results.length > 0 ? (
          <div className="results">
            {results.map(el => (
              <div className="gifHolder" key={el.id}>
                <button
                  type="button"
                  onClick={chooseGif}
                  data-url={el.media[0].gif.url}
                  className="clickable"
                >
                  <img
                    src={el.media[0].tinygif.url}
                    alt=""
                    data-url={el.media[0].gif.url}
                  />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  results: state.result.results,
});
const mapDispatchToProps = dispatch => ({
  chooseGif: e => {
    e.preventDefault();
    dispatch(clearSuggestions());
    dispatch(clearGifs());
    dispatch(setInput(''));
    dispatch(setChosen(e.target.dataset.url));
  },
});
export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(Results);
