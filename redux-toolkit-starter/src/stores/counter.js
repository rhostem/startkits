import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')

const counter = createReducer(0, {
  [increment]: (state, action) => state + (action.payload || 1),
  [decrement.type]: (state, action) => state - (action.payload || 1),
})

export default counter
