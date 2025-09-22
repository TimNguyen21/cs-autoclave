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
    updateLoadStatus: (state, action) => {
      const { id, loadStatus } = action.payload;
      const load = state.autoclaveLoads.find(load => load.id === id);

      if (load) {
        load.loadStatus = loadStatus;
      }
    },
    addNote: (state, action) => {
      const { id, note } = action.payload;
      const load = state.autoclaveLoads.find(load => load.id === id);
      
      if (load) {
        load.notes.push(note);
      }
    }
  },
});

export const { addLoad, updateLoadStatus, addNote } = autoclaveLoadsSlice.actions;
export default autoclaveLoadsSlice.reducer;
