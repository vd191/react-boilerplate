import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
    signOut: (state) => {
      state.value = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
