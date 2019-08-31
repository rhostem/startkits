import { all } from 'redux-saga/effects';
import todo from './todo/todoSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([todo()]);
}
