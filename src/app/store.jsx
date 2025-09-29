import { configureStore } from '@reduxjs/toolkit';
import autoclaveLoadsReducer from '../features/autoclave-loads/autoclaveLoadsSlice';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    alert('Error saving state to localStorage');
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    autoclaveLoads: autoclaveLoadsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
