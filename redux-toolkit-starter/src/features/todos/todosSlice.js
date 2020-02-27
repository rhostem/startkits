import { createSlice, PayloadAction } from '@reduxjs/toolkit'
let todoId = 1

const initialState: ITodo[] = []

const todos = createSlice({
  name: 'todos', // 액션 타입 문자열의 prefix로 들어간다.
  initialState,
  reducers: {
    // reducer와 action 생성자 분리
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text: string): PayloadAction<ITodo> => ({
        payload: {
          id: todoId++,
          text,
          isDone: false,
        },
      }),
    },
    // action 생성자 별도로 없음.
    removeTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.splice(
        state.findIndex(item => item.id === action.payload.id),
        1
      )
    },

    toggleIsDone: (state, action: PayloadAction<{ id: number }>) => {
      const target = state.findIndex(item => item.id === action.payload.id)

      if (typeof target === 'number') {
        state[target].isDone = !state[target].isDone
      }
    },
  },
})

export const { addTodo, removeTodo, toggleIsDone } = todos.actions

export default todos
