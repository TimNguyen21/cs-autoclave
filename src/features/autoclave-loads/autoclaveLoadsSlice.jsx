import { createSlice } from "@reduxjs/toolkit";

const autoclaveLoadsSlice = createSlice({
  name: "autoclaveLoads",
  initialState: {
    autoclaveLoads: [],
  },
  reducers: {
    addLoad: (state, action) => {
      state.autoclaveLoads.push(action.payload);
    },
  },
});

export const { addLoad } = autoclaveLoadsSlice.actions;
export default autoclaveLoadsSlice.reducer;
