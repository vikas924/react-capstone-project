import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  animelist: [],
  genrelist: [{ id: 0, genre: 'Any' }, { id: 1, genre: 'Action' },
    { id: 2, genre: 'Adventure' }, { id: 6, genre: 'Demons' },
    { id: 9, genre: 'Ecchi' }, { id: 10, genre: 'Fantasy' },
    { id: 11, genre: 'Game' }, { id: 17, genre: 'Martial Arts' },
    { id: 27, genre: 'Shounen' }, { id: 30, genre: 'Sports' },
    { id: 31, genre: 'Super Power' }, { id: 37, genre: 'Supernatural' }],
  selected: 0,
  search: '',
  pages: 1,
  isLoading: true,
};

export const fetchanime = createAsyncThunk('anime/data', async (url) => {
  try {
    const response = await axios.get(url);
    const res = response.data;
    return res;
  } catch (error) {
    throw new Error('Failed to get list');
  }
});

const animeSlice = createSlice({
  name: 'animelist',
  initialState,
  reducers: {
    filtergenre: (state, action) => ({
      ...state,
      selected: action.payload,
      search: '',
    }),
    searchanime: (state, action) => ({
      ...state,
      search: action.payload,
    }),
    browsepages: (state, action) => ({
      ...state,
      pages: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchanime.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(fetchanime.fulfilled, (state, action) => ({
        ...state,
        animelist: (Object.keys(action.payload.data).map((key) => ({
          id: action.payload.data[key].mal_id,
          images: action.payload.data[key].images,
          titles: action.payload.data[key].title,
          score: action.payload.data[key].score,
          rank: action.payload.data[key].rank,
        }))),
        current: action.payload.pagination.current_page,
        nextavailable: action.payload.pagination.has_next_page,
        total: action.payload.pagination.last_visible_page,
        isLoading: false,
      }))
      .addCase(fetchanime.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { filtergenre, searchanime, browsepages } = animeSlice.actions;

export default animeSlice.reducer;
