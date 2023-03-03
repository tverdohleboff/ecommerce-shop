import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';
import tasksReducer from '../features/tasks/tasksSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    tasksList: tasksReducer,
  },
});
