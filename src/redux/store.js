import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './animelist/animeSlice';

const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});

export default store;
