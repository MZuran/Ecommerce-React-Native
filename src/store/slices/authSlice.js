import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value.email = action.payload.email;
    },

    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
