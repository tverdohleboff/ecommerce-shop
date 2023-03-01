import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    currentUser: 'Anon',
    password: undefined
  },
  reducers: {
    signIn: (state, action) => {
      state.currentUser = action.payload.login;
      state.password = action.payload.password;
    },
    signOut: (state) => {
      state.currentUser = 'Anon';
      state.password = undefined;
    }
  },
})

export const { signIn, signOut } = loginSlice.actions;

export const selectCurrentUser = (state) => state.login.currentUser;

export default loginSlice.reducer;
