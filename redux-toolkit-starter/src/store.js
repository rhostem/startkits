import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import todosSlices from 'src/features/todos/todosSlice'
import counter from 'src/features/counter/counterReducer'
import repoDetailSlice from 'src/features/github/repoDetailSlice'

const rootReducer = combineReducers({
  counter,
  todos: todosSlices.reducer,
  repoDetail: repoDetailSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})

// Flow 타입으로 사용할 RootState. 아래와 같이 import해서 사용한다.
// import { type RootState } from 'src/store'
const rootState = store.getState()
export type IRootState = typeof rootState // initialState의 타입

export default store
