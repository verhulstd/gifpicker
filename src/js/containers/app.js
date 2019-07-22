// @flow
import * as React from 'react';
import GifPicker from './GifPicker';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  static propTypes = {};

  state = {};

  render() {
    return (
      <>
        <GifPicker apikey="X30DJ9G0204N" />
      </>
    );
  }
}

export default App;
