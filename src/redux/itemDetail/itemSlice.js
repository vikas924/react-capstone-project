import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
  navigation: 'homepage',
  id: '',
  isLoading: true,
};

const itemSlice = createSlice({
  name: 'animedetail',
  initialState,
  reducers: {
    navigation: (state, action) => ({
      ...state,
      details: action.payload.data,
      navigation: 'detailspage',
      id: action.payload.key,
      isLoading: false,
    }),
    Home: (state) => ({
      ...state,
      navigation: 'homepage',
      id: '',
    }),
  },
});

export const { navigation, Home } = itemSlice.actions;

export default itemSlice.reducer;
