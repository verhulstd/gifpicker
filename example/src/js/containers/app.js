import React from 'react';
import GifPicker from '../../../../lib/index';
import '../../../../dist/style.css';

class App extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <GifPicker
          apikey={process.env.APIKEY}
          onSelect={gifUrl => {
            console.log(gifUrl);
            console.log(this.gifRef.current);
          }}
        />
      </>
    );
  }
}

export default App;
