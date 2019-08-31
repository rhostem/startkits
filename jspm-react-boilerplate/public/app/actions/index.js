import * as ActionTypes from '../constants/ActionTypes';
import $ from 'jquery';

let nextTodoId = 0;
export const addTodo = (text) => ({
  type: ActionTypes.ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: ActionTypes.TOGGLE_TODO,
  id,
});

export const requestTodos = () => ({
  type: ActionTypes.REQUEST_TODOS,
});

export const requestFailed = () => ({
  type: ActionTypes.REQUEST_FAILED,
});

export const receiveTodos = (json) => ({
  type: ActionTypes.RECEIVE_TODOS,
  json,
});

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestTodos());
    $.ajax({
      method: 'get',
      url: '/db/todos.json',
      cache: false,
      success: (data) => {
        dispatch(receiveTodos(data.todos));
      },
      erorr: () => {
        dispatch(requestFailed());
      },
    });
  };
}
