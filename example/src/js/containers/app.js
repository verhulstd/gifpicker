// @flow
import * as React from 'react';
import GifPicker from '../../../../lib/index';
import '../../../../dist/style.css';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  static propTypes = {};

  state = {};

  render() {
    return (
      <>
        <GifPicker apikey={process.env.APIKEY} />
      </>
    );
  }
}

export default App;
