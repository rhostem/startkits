import React from 'react'
import counter, { increment, decrement } from '../stores/counter'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
  const counter = useSelector(s => s.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>counter</h2>
      <div>
        <b>{counter}</b>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  )
}
