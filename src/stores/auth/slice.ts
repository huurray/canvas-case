import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  initialized: boolean;
}

export const initialState: IState = {
  initialized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInit: (state) => {
      state.initialized = true;
    },
  },
});

export default authSlice.reducer;
