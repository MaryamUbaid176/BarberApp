import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
  name: "user",
  initialState: {
    userData: null,
    token: null,
    isLogin: false,
    welcome: true,
  },

  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAccessToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.userData = null;
      state.isLogin = null;
    },
    onLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setWelcome: (state, action) => {
      state.welcome = action.payload;
    },
    updatePasscodeToogle: (state, action) => {
      let temp = state.userData;
      temp.enablePasscode = action.payload;
      state.userData = temp;
    },
    updateUserImage: (state, action) => {
      let temp = state.userData;
      temp.profileImage = action.payload;
      state.userData = temp;
    },
    updateUser: (state, action) => {
      let temp = state.userData;
      temp.name = action.payload.name;
      temp.country = action.payload.country;
      temp.phone = action.payload.phone;
      temp.currency = action.payload.currency;
      temp.passcode = action.payload.passcode;
      temp.enablePasscode = action.payload.enablePasscode;
      state.userData = temp;
    },
    updatePinPasscode: (state, action) => {
      let temp = state.userData;
      temp.passcode = action.payload.passcode;
      temp.enablePasscode = action.payload.enablePasscode;
      state.userData = temp;
    },
  },
});

export const {
  setUser,
  setToken,
  setAccessToken,
  logOut,
  onLogin,
  setWelcome,
  updatePasscodeToogle,
  updateUserImage,
  updateUser,
  updatePinPasscode,
} = userSlicer.actions;

export default userSlicer.reducer;
