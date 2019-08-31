import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer, { RootState } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from './rootSaga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];
const middleware = [thunk, sagaMiddleware, routerMiddleware(history)];

declare var window: { devToolsExtension: () => {} };
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window && window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const initialState: RootState = <RootState>{};
const store = createStore(rootReducer, initialState, composedEnhancers);
// run saga middleware is possible after the store created

sagaMiddleware.run(rootSaga);

export default store;
