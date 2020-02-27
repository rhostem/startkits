import React from 'react'
import { SubHeading } from 'src/components/Heading'
import { type IRootState } from 'src/store'
import { useSelector } from 'react-redux'

export default function Todos() {
  const todos = useSelector((s: IRootState) => s.todos)

  return (
    <div>
      <SubHeading>todos</SubHeading>
      {todos.length === 0 ? (
        <div>there is no todo items</div>
      ) : (
        <ul>
          {todos.map((todoItem: ITodo) => (
            <li>
              <span>{todoItem.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
