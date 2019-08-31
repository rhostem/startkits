import { Todo } from './todoModel';
import { ADD_TODO, TOGGLE_TODO } from './todoActions';
import RootAction from '../rootAction';

export type TodoState = Readonly<{
  list: Array<Todo>;

  nested?: Readonly<{
    prop: number;
  }>;
}>;

const initialState: TodoState = {
  list: [],
};

const todo = (state: TodoState = initialState, action: RootAction) => {
  switch (action.type) {
    case ADD_TODO:
      const addList = state.list.slice();

      addList.push({
        id: action.content,
        content: action.content,
        checked: false,
      });

      return Object.assign({}, state, { list: addList });

    case TOGGLE_TODO:
      const toggleList = state.list.slice();
      const idx = toggleList.findIndex(v => v.id === action.id);
      const checked = toggleList[idx].checked;

      toggleList[idx] = Object.assign(toggleList[idx], { checked: !checked });

      return Object.assign({}, state, { list: toggleList });

    default:
      return state;
  }
};

export default todo;
