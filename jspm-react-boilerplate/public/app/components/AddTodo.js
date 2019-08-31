import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { onAddTodo } = this.props;

    return (
      <div>
        <span>input new todo item</span>
        <input type="text" ref="inputTodo" placeholder="input new todo item" />
        <button type="button" onClick={() => onAddTodo(this.refs.inputTodo)}>Add</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
