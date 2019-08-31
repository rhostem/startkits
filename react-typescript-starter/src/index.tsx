// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { AppContainer } from 'react-hot-loader';
// import store /* , { history } */ from './store';
import registerServiceWorker from './registerServiceWorker';
import './styles/global.ts'; // inject global style
import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

require('react-hot-loader/patch');

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
const render = (Component: React.SFC) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render(App);
//   });
// }

registerServiceWorker();

// tslint:disable-next-line
document.addEventListener('touchstart', function() {}, true);
