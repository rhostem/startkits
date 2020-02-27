import React, { useState, useCallback } from 'react'
import { SubHeading } from 'src/components/Heading'
import { type IRootState } from 'src/store'
import { useSelector, useDispatch } from 'react-redux'
import {
  addTodo,
  removeTodo,
  toggleIsDone,
} from 'src/features/todos/todosSlice'

export default function Todos() {
  const todosState = useSelector((s: IRootState) => s.todos)
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState('text')

  const handleClickAdd = useCallback(
    e => {
      e.preventDefault()

      if (!!todoText) {
        dispatch(addTodo(todoText))
      } else {
        alert('⚠️ empty text')
      }
    },
    [dispatch, todoText]
  )

  return (
    <div>
      <SubHeading>todos</SubHeading>

      <form onSubmit={handleClickAdd}>
        <input
          type="text"
          placeholder="new Todo"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />
        <button type="submit" onClick={handleClickAdd}>
          Add Todo
        </button>
      </form>

      {todosState.length === 0 ? (
        <div>there is no todo items</div>
      ) : (
        <ul>
          {todosState.map(todoItem => (
            <li>
              <span
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : null,
                }}
              >
                {todoItem.text}
              </span>
              <input
                type="checkbox"
                checked={todoItem.isDone}
                onClick={() => dispatch(toggleIsDone({ id: todoItem.id }))}
              />
              <button onClick={() => dispatch(removeTodo({ id: todoItem.id }))}>
                REMOVE
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
