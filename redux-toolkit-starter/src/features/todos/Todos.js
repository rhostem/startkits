import React, { useState } from 'react'
import { SubHeading } from 'src/components/Heading'
import { type IRootState } from 'src/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from 'src/features/todos/todosSlice'

export default function Todos() {
  const todosState = useSelector((s: IRootState) => s.todos)
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState('')

  return (
    <div>
      <SubHeading>todos</SubHeading>
      {todosState.length === 0 ? (
        <div>there is no todo items</div>
      ) : (
        <ul>
          {todosState.map((todoItem: ITodo) => (
            <li>
              <span
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : null,
                }}
              >
                {todoItem.text}
              </span>
              <input type="checkbox" checked={todoItem.isDone} />
            </li>
          ))}
        </ul>
      )}

      <div>
        <input
          type="text"
          placeholder="new Todo"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo(todoText))}>Add Todo</button>
      </div>
    </div>
  )
}
