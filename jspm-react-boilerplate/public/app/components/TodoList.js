import React, { Component, PropTypes } from 'react';

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <div>
        <h3>Todo List</h3>
        <h4>{todos.isFetching ? 'fetching data ...' : ''}</h4>
        <ul>
          {todos.data.map(todo => (
            <li key={todo.id} onClick={() => onTodoClick(todo.id)}>
              {todo.text}
              <input type="checkbox" checked={todo.completed ? 'checked' : ''} />
            </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
