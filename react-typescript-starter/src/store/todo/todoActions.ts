// https://github.com/piotrwitek/react-redux-typescript-guide#kiss-style
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export type Actions = {
  ADD_TODO: {
    type: typeof ADD_TODO; // string
    content: string;
  };
  TOGGLE_TODO: {
    type: typeof TOGGLE_TODO;
    id: string;
  };
};

export const todoActions = {
  addTodo: (content: string): Actions[typeof ADD_TODO] => ({
    type: ADD_TODO,
    content,
  }),
  toggleTodo: (id: string): Actions[typeof TOGGLE_TODO] => ({
    type: TOGGLE_TODO,
    id,
  }),
};
