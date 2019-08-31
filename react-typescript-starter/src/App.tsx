import * as React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';

/**
 * client-side routing of react-router
 * https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing
 * https://reacttraining.com/react-router/web/api/HashRouter/basename-string
 */
const App: React.SFC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes />
    </ConnectedRouter>
  </Provider>
);

export default App;
