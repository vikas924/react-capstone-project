import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  details: [],
  navigation: 'homepage',
  id: '',
  isLoading: true,
};

export const fetchdetails = createAsyncThunk('anime/details', async (url) => {
  try {
    const response = await axios.get(url);
    const res = response.data;
    return res;
  } catch (error) {
    throw new Error('Failed to get list');
  }
});

const itemSlice = createSlice({
  name: 'animelist',
  initialState,
  reducers: {
    navigation: (state, action) => ({
      ...state,
      navigation: 'detailspage',
      id: action.payload,
    }),
    Home: (state) => ({
      ...state,
      navigation: 'homepage',
      id: '',
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdetails.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(fetchdetails.fulfilled, (state, action) => ({
        ...state,
        details: action.payload,
        navigation: 'detailspage',
        isLoading: false,
      }))
      .addCase(fetchdetails.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { navigation, Home } = itemSlice.actions;

export default itemSlice.reducer;
