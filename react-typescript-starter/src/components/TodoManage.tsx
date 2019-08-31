import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { RootState } from '../store/rootReducer';
import { todoActions } from '../store/todo/todoActions';
import { returntypeof } from 'react-redux-typescript';
import { push } from 'react-router-redux';

const mapStateToProps = (state: RootState) => ({
  todos: state.todo.list,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) =>
  bindActionCreators(
    {
      addTodo: todoActions.addTodo,
      toggleTodo: todoActions.toggleTodo,
      push,
    },
    dispatch
  );

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

type Props = typeof statePropTypes & typeof actionPropTypes;
type State = {};

class TodoManage extends React.Component<Props, State> {
  static defaultProps = {};
  state: State = {};

  constructor(props: Props) {
    super(props);
  }

  handleClickAddTodo = () => {
    this.props.addTodo(String(+new Date()));
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <button onClick={this.handleClickAddTodo}>click to add TODO</button>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              <input
                id={todo.id}
                type="checkbox"
                onClick={() => this.props.toggleTodo(todo.id)}
                value={todo.checked ? 'checked' : 'unchecked'}
              />
              <label htmlFor={todo.id}>{todo.content}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(TodoManage);
