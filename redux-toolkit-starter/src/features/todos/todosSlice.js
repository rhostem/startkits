import { createSlice, PayloadAction } from '@reduxjs/toolkit'
let todoId = 0

const initialState: ITodo[] = []

const todos = createSlice({
  name: 'todos', // 액션 타입 문자열의 prefix로 들어간다.
  initialState,
  reducers: {
    addTodo: {
      reducer: (
        state,
        action: PayloadAction<{ id: number | string, text: string }>
      ) => {
        const { text } = action.payload
        state.push({ id: todoId++, text, isDone: false })
      },
      prepare: (text: string) => ({
        payload: { id: Math.floor(Math.random() + 100000), text },
      }),
    },
    removeTodo: {},
  },
})

export const { addTodo } = todos.actions

export default todos
