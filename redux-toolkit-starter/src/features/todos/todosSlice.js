import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (
        state,
        action: PayloadAction<{ id: number | string, text: string }>
      ) => {
        const { id, text } = action.payload
        state.push({ id, text })
      },
      prepare: text => ({
        payload: { id: Math.floor(Math.random() + 100000), text },
      }),
    },
  },
})

export default todos
