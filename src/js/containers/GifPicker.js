// @flow
import * as React from 'react';

import { Provider } from 'react-redux';
import store from '../store';
import SearchForm from '../components/SearchForm';
import Suggestions from '../components/Suggestions';
import Results from '../components/Results';
import ChosenGif from '../components/ChosenGif';
import { saveKey } from '../actions/settingsActions';

type Props = {
  apikey: string,
};

class GifPicker extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const { apikey } = this.props;
    store.dispatch(saveKey(apikey));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchForm />
          <Suggestions />
          <Results />
          <ChosenGif />
        </div>
      </Provider>
    );
  }
}

export default GifPicker;
