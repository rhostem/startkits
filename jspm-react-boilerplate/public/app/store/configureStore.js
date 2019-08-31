import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

function createAppStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

export default function configureStore(initialState) {
  // if System.js
  if (System.trace) {
    if (window.store === undefined) {
      window.store = createAppStore(initialState);
    } else {
      // if store is already exists, replace it
      window.store.replaceReducer(rootReducer);
    }
    return window.store;
  }
  return createAppStore(initialState);
}
