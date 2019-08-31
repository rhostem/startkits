import * as Actions from './dataActions'
import { delay } from 'redux-saga'
import { /* all, */ put, takeLatest } from 'redux-saga/effects'

export function* fetchData() {
  yield takeLatest(Actions.FETCH_DATA, function*(action) {
    try {
      const res = yield Promise.resolve({
        data: { message: 'HELLO FROM SERVER' },
      })
      yield delay(200)
      yield put(Actions.fetchDataSuccess(res.data))
    } catch (e) {
      yield put({ type: Actions.FETCH_DATA_FAILED, error: e })
    }
  })
}

export default function* data() {
  yield fetchData()
}
