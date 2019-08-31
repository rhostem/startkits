import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';
import todo, { TodoState } from './todo/todoReducer';

export interface RootState {
  router: RouterState;
  todo: TodoState;
}

const rootState = combineReducers<RootState>({
  router,
  todo,
});

export default rootState;
