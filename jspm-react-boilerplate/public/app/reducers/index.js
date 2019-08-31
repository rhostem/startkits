import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

const rootReducers = combineReducers({
  todos,
  filter,
});

export default rootReducers;
