import '../vendor/modernizr.custom.min';
import '../vendor/detectizr.min';

import './style.css!';

import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);
