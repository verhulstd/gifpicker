// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { clearGifs, setChosen } from '../actions/resultActions';
import { clearSuggestions, setInput } from '../actions/formActions';

type Props = {
  results: any,
  chooseGif: any,
  select: Function,
};
type State = {};

export class Results extends React.Component<Props, State> {
  render() {
    const { results, chooseGif, select } = this.props;
    return (
      <>
        {results.length > 0 ? (
          <div className="gifpicker__results">
            {results.map(el => (
              <div className="gifpicker__results__gifHolder" key={el.id}>
                <button
                  type="button"
                  onClick={e => {
                    chooseGif(e);
                    select(el.media[0].gif.url);
                  }}
                  data-url={el.media[0].gif.url}
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
export const mapStateToProps = (state: Object) => ({
  results: state.result.results,
  select: state.settings.select,
});
export const mapDispatchToProps = (dispatch: Function) => ({
  chooseGif: (e: Object) => {
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
