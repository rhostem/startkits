import { createSlice } from '@reduxjs/toolkit'
let todoId = 1

const initialState: ITodo[] = []

const todosSlices = createSlice({
  name: 'todos', // 액션 타입 문자열의 prefix로 들어간다. ex) todos/typename
  initialState,
  reducers: {
    // reducer와 action 생성자 분리
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text: string): IAction<ITodo> => ({
        payload: {
          id: todoId++,
          text,
          isDone: false,
        },
      }),
    },
    // action 생성자 별도로 없음. 파라미터가 payload 속성에 바로 할당됨
    removeTodo: (state, action: IAction<{ id: number }>) => {
      state.splice(
        state.findIndex(item => item.id === action.payload.id),
        1
      )
    },
    toggleIsDone: (state, action: IAction<{ id: number }>) => {
      const target = state.findIndex(item => item.id === action.payload.id)

      if (typeof target === 'number') {
        state[target].isDone = !state[target].isDone
      }
    },
  },
})

export const { addTodo, removeTodo, toggleIsDone } = todosSlices.actions

export default todosSlices
