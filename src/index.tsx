import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reset } from 'styled-reset'

import { Provider } from 'react-redux';
import store from './tools/store'


ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <App />
  </Provider>,
  document.getElementById('root')
);
