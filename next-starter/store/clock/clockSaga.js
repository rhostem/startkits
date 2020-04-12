import { delay } from 'redux-saga'
import { all, call, put, take } from 'redux-saga/effects'
import { tickClock } from './clockActions'
import { types } from './clockActions'

function* runClockSaga() {
  yield take(types.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 1000)
  }
}

export default function*() {
  yield all([call(runClockSaga)])
}
