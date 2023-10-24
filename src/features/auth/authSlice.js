import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
};
const authSlice = createSlice({
  name: "authAPi",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    useLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});
export const { userLoggedIn, useLoggedOut } = authSlice.actions;
export default authSlice;
