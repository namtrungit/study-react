import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    create: {
      payload: {},
      loading: false,
      error: false,
    },
    get: {
      payload: {},
      loading: false,
      error: false,
    },
    update: {
      payload: {},
      loading: false,
      error: false,
    },
    remove: {
      payload: {},
      loading: false,
      error: false,
    },
    userList: [],
    userTotal: 0,
  },
  reducers: {
    create: (state, action) => {},
    get: (state, action) => {
      state.get.loading = true;
      state.get.error = false;
      state.get.payload = action.payload;
    },
    getSucess: (state, action) => {
      state.get.loading = false;
      state.userList = action.payload;
    },
    getError: (state, action) => {
      state.get.loading = false;
      state.get.error = true;
    },
    update: (state, action) => {},
    remove: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { create, get, getSucess, getError, update, remove } =
  usersSlice.actions;

export default usersSlice.reducer;
