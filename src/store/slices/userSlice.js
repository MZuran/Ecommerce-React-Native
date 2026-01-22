import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userName: "",
    profilePicture: ""
  },
};

export const userSlice = createSlice({

  name: "user",

  initialState,

  reducers: {

    setProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload;
    },

    setUserName: (state, action) => {
        state.value.userName = action.payload
    }

    //resetUser: () => initialState,
  },
});

export const { setProfilePicture, setUserName } = userSlice.actions;
export default userSlice.reducer;
