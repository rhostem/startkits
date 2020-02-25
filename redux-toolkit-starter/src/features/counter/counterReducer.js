import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('increment', (amount = 0) => {
  return {
    payload: {
      amount,
    },
  }
})

export const decrement = createAction('decrement', (amount = 0) => {
  return {
    payload: {
      amount,
    },
  }
})

const counter = createReducer(0, {
  [increment]: (state, action) => state + action.payload.amount,
  [decrement]: (state, action) => state - action.payload.amount,
})

export default counter