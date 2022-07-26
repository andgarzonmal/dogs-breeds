import { configureStore } from '@reduxjs/toolkit';
import { dogsReducer } from './dogs';

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export default store;
