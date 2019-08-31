import * as ActionTypes from '../constants/ActionTypes';

const todos = (state = {
  isFetching: false,
  data: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case ActionTypes.RECEIVE_TODOS:
      return Object.assign({}, state, {
        data: action.json,
        isFetching: false,
      });

    case ActionTypes.REQUEST_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
      });

    case ActionTypes.ADD_TODO:
      return Object.assign({}, state, {
        data: [
          ...state.data, // existing todo items in todos array
          {
            id: action.id,
            text: action.text,
            completed: true,
            // completed: false,
          },
        ],
      });

    case ActionTypes.TOGGLE_TODO:
      return Object.assign({}, state, {
        data: state.data.map((todo) => {
          // if todo is clicked item
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      });

    default:
      return state;

  }
};

export default todos;
