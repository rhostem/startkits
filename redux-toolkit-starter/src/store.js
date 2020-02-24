import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './stores/rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})

export default store
