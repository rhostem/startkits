import { combineReducers } from '@reduxjs/toolkit'
import todosSlices from 'features/todo/todoSlice'

const rootReducer = combineReducers({
  todo: todosSlices.reducer,
})

declare global {
  type IRootState = ReturnType<typeof rootReducer>
}
export default rootReducer
