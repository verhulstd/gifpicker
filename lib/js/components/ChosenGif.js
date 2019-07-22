// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { setChosen } from '../actions/resultActions';

type Props = {
  url: string,
  clearChosen: any,
};

class ChosenGif extends React.Component<Props> {
  render() {
    const { url, clearChosen } = this.props;
    const iconStyle = {
      position: 'absolute',
      right: '10px',
      top: '10px',
      backgroundColor: 'white',
      borderRadius: '50%',
      border: '1px solid #fff',
      cursor: 'pointer',
    };
    return (
      <>
        {url !== '' ? (
          <div className="chosengif">
            <img src={url} alt="Chosen tenor gif" />
            <button type="button" onClick={clearChosen} style={iconStyle}>
              <Icon type="close-circle" theme="filled" />
            </button>
            <input type="hidden" name="tenorgif" value={url} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  url: state.result.chosen,
});
const mapDispatchToProps = dispatch => ({
  clearChosen: e => {
    e.preventDefault();
    dispatch(setChosen(''));
  },
});

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps
)(ChosenGif);
