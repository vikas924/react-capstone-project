import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './animelist/animeSlice';
import itemReducer from './itemDetail/itemSlice';

const store = configureStore({
  reducer: {
    anime: animeReducer,
    animebyid: itemReducer,
  },
});

export default store;
