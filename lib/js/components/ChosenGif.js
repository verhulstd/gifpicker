// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { setChosen } from '../actions/resultActions';

type Props = {
  url: string,
  clearChosen: any,
};

export class ChosenGif extends React.Component<Props> {
  render() {
    const { url, clearChosen } = this.props;

    return (
      <>
        {url !== '' ? (
          <div className="gifpicker__chosengif">
            <img src={url} alt="Chosen tenor gif" />
            <button type="button" onClick={clearChosen}></button>
            <input type="hidden" name="tenorgif" value={url} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export const mapStateToProps = state => ({
  url: state.result.chosen,
});
export const mapDispatchToProps = dispatch => ({
  clearChosen: e => {
    e.preventDefault();
    dispatch(setChosen(''));
  },
});

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(ChosenGif);
