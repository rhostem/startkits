import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function withReduxSaga(
  BaseComponent,
  mapStateToProps = null,
  mapDispatchToProps = null
) {
  return withRedux(configureStore, mapStateToProps, mapDispatchToProps)(
    nextReduxSaga(BaseComponent)
  )
}
