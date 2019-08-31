import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const initialState = {}
const enhancers = []
const middleware = [thunk, sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

// run saga middleware is possible after the store created
sagaMiddleware.run(rootSaga)

export default store
