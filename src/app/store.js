import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import stringReducer from '../features/string/stringSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stringChange: stringReducer,
  },
});
