import clock from './clock/clockSaga'
import { all } from 'redux-saga/effects'

function* rootSaga() {
  yield all([clock()])
}

export default rootSaga
