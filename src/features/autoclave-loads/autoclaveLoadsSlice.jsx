import { createSlice } from "@reduxjs/toolkit";

const autoclaveLoadsSlice = createSlice({
  name: "autoclaveLoads",
  initialState: {
    autoclaveLoads: [],
  },
  reducers: {
    addLoad: (state, action) => {
      // action.payload { loadId, date, autoclaveNumber, loadNumber, technicianId, items, technicianSignoffId, passStatus, notes: [] }
      state.autoclaveLoads.push(action.payload);
    },
    confirmLoadCompletion: (state, action) => {
      const { loadId, passStatus, note, technicianSignoffId } = action.payload;
      const load = state.autoclaveLoads.find(load => load.loadId === loadId);

      if (load) {
        load.passStatus = passStatus;
        load.technicianSignoffId = technicianSignoffId;

        if (note) {
          load.notes.push(note);
        }
      }
    },
    addNote: (state, action) => {
      const { loadId, note } = action.payload;
      const load = state.autoclaveLoads.find(load => load.loadId === loadId);
      
      if (load) {
        load.notes.push(note);
      }
    }
  },
});

export const { addLoad, confirmLoadCompletion, addNote } = autoclaveLoadsSlice.actions;
export default autoclaveLoadsSlice.reducer;
