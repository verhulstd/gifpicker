// @flow
import * as React from 'react';
import 'antd/dist/antd.css';
import './css/style.scss';

import { Provider } from 'react-redux';
import store from './js/store';
import SearchForm from './js/components/SearchForm';
import Suggestions from './js/components/Suggestions';
import Results from './js/components/Results';
import ChosenGif from './js/components/ChosenGif';
import { saveKey } from './js/actions/settingsActions';

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
