import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import todos from 'src/features/todos/todosSlice'
import counter from 'src/features/counter/counterReducer'

const rootReducer: RepoDetail = combineReducers({
  counter,
  todos: todos.reducer,
})
const store: Issue = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})

export default store
