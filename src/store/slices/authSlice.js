import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    localId: ""
  },
};

export const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {

    setUser: (state, action) => {
      state.value.email = action.payload.email;
      state.value.localId = action.payload.localId;
    },

    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
