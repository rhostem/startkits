import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, fetchTodos } from '../actions/index';

import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

class TodoPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { todos, onAddTodo, onTodoClick, onFetchTodoClick } = this.props;
    return (
      <div>
        <button onClick={onFetchTodoClick}>fetch todos</button>
        <AddTodo onAddTodo={onAddTodo} />
        <TodoList
          todos={todos}
          onTodoClick={onTodoClick}
        />
      </div>
    );
  }
}

// props(value) for TodoPage
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// props(function) for TodoPage
const mapDispatchToProps = (dispatch) => ({
  onFetchTodoClick: () => {
    dispatch(fetchTodos()); // dispatch async action
  },
  // on click add button
  onAddTodo: (inputTodo) => {
    // input validation
    // if (!inputTodo.value) {
    //   alert('input text for todo item');
    //   return;
    // }
    const todo = inputTodo;
    dispatch(addTodo(todo.value)); // addTodo = action creator
    todo.value = '';
  },
  // on click todo list item
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

TodoPage.propTypes = {
  onFetchTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage);
