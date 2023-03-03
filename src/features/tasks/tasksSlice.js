import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasksList',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        name: action.payload.name,
        date: action.payload.date
      })
    },
    clearTasksList: (state) => {
      state.length = 0;
    }
  }
})

export const { addTask, clearTasksList } = tasksSlice.actions;

export const selectTasksList = (state) => state.tasksList;

export default tasksSlice.reducer;