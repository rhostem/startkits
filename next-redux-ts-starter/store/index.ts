/**
 * NOTE: typing reference
 *
 * react-redux: https://react-redux.js.org/using-react-redux/static-typing
 * redux-tookit: https://redux-toolkit.js.org/usage/usage-with-typescript
 */
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export type IRootState = ReturnType<typeof rootReducer>

// useSelector hook 대신 사용
export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector

// 타이핑을 위한 더미 스토어 객체. 실제로 사용하지 않는다.
const dummyStore = configureStore({
  reducer: rootReducer,
})

export type IStore = typeof dummyStore
export type IAppDispatch = typeof dummyStore.dispatch
