import { ADD_TODO } from './todoActions';
import { delay } from 'redux-saga';
import { all, take } from 'redux-saga/effects';

export function* addTodo() {
  yield take(ADD_TODO);
  yield delay(1000);
}

export default function* data() {
  yield all([addTodo()]);
}
