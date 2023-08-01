import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.jikan.moe/v4/genres/anime';

export const fetchanime = createAsyncThunk('anime/data', async () => {
  try {
    const response = await axios.get(url);
    const res = response.data;
    return res;
  } catch (error) {
    throw new Error('Failed to get list');
  }
});

const initialState = {
  animelist: [],
  isLoading: true,
};

const animeSlice = createSlice({
  name: 'animelist',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchanime.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(fetchanime.fulfilled, (state, action) => ({
        ...state,
        animelist: [action.payload],
        isLoading: false,
      }))
      .addCase(fetchanime.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default animeSlice.reducer;
