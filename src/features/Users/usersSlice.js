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
  },
  reducers: {
    create: (state, action) => {},
    get: (state, action) => {},
    update: (state, action) => {},
    remove: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { create, get, update, remove } = usersSlice.actions;

export default usersSlice.reducer;
