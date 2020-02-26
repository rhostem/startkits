import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import todos from 'src/features/todos/todosSlice'
import counter from 'src/features/counter/counterReducer'

const rootReducer = combineReducers({
  counter,
  todos: todos.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})

export default store
