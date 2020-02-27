import { createAction, createReducer } from '@reduxjs/toolkit'

export const incrementWithoutPrepareCb = createAction(
  'increment_without_prepare'
)

export const increment = createAction('increment', (amount: number = 0) => {
  return {
    payload: {
      amount,
    },
  }
})

export const decrement = createAction('decrement', (amount: number = 0) => {
  return {
    payload: {
      amount,
      test: 0,
    },
  }
})

const counter = createReducer(0, {
  [increment]: (state, action) => state + action.payload.amount,
  [decrement]: (state, action) => state - action.payload.amount,
})

export default counter
