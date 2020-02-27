import { createAction, createReducer } from '@reduxjs/toolkit'

export const incrementWithoutPrepareCb = createAction(
  'increment_without_prepare'
)

export const increment = createAction(
  'counter/increment',
  (amount: number = 0) => {
    return {
      payload: {
        amount,
      },
    }
  }
)

export const decrement = createAction(
  'counter/decrement',
  (amount: number = 0) => {
    return {
      payload: {
        amount,
        test: 0,
      },
    }
  }
)

const initialState: number = 0

const counter = createReducer(initialState, {
  [increment]: (state, action) => state + action.payload.amount,
  [decrement]: (state, action) => state - action.payload.amount,
})

export default counter
