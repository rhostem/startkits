import { combineReducers } from '@reduxjs/toolkit'
import todosSlices from 'features/todo/todoSlice'

const rootReducer = combineReducers({
  todo: todosSlices.reducer,
})

export default rootReducer
