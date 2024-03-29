// @flow
import * as React from 'react';

import { Provider } from 'react-redux';
import store from './js/store';
import SearchForm from './js/components/SearchForm';
import Suggestions from './js/components/Suggestions';
import Results from './js/components/Results';
import ChosenGif from './js/components/ChosenGif';
import { saveKey, saveSelectFunction } from './js/actions/settingsActions';

type Props = {
  apikey: string,
  onSelect: Function,
};

class GifPicker extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const { apikey, onSelect } = this.props;
    store.dispatch(saveKey(apikey));
    store.dispatch(saveSelectFunction(onSelect));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="gifpicker">
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
