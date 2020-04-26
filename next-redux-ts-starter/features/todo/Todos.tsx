import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, toggleIsDone } from './todoSlice'
import styled from 'styled-components'
import { useTypedSelector } from 'store'

const Wrap = styled.div`
  ul {
    list-style: none;
  }
`

export default function Todos() {
  const todos = useTypedSelector((state) => state.todo)
  const dispatch: IAppDispatch = useDispatch()
  const [todoText, setTodoText] = useState('')

  const handleClickAdd = useCallback(
    (e) => {
      e.preventDefault()

      if (todoText) {
        dispatch(addTodo({ text: todoText }))
      } else {
        alert('⚠️ input text is empty')
      }
    },
    [dispatch, todoText]
  )

  return (
    <Wrap>
      <h2>todos</h2>

      <form onSubmit={handleClickAdd}>
        <input
          type="text"
          placeholder="new Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit" onClick={handleClickAdd}>
          Add Todo
        </button>
      </form>

      {todos.length === 0 ? (
        <div>there is no todo items</div>
      ) : (
        <ul>
          {todos.map((todoItem, index) => (
            <li id={`todo-${todoItem.id}`} key={index}>
              <label
                htmlFor={`${todoItem.id}`}
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : undefined,
                }}
              >
                {todoItem.text}
              </label>
              <input
                id={`${todoItem.id}`}
                type="checkbox"
                checked={todoItem.isDone}
                onChange={() => dispatch(toggleIsDone({ id: todoItem.id }))}
              />
              <button onClick={() => dispatch(removeTodo({ id: todoItem.id }))}>
                REMOVE
              </button>
            </li>
          ))}
        </ul>
      )}
    </Wrap>
  )
}
