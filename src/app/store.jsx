import { configureStore } from '@reduxjs/toolkit';
import autoclaveLoadsReducer from '../features/autoclave-loads/autoclaveLoadsSlice';

export const store = configureStore({
  reducer: {
    autoclaveLoads: autoclaveLoadsReducer,
  },
});
