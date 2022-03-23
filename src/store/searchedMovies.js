import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import { searchMovieRequestURL } from '../utils/axiosRequests';

export const getSearchedMovies = createAsyncThunk(
  'GET_SEARCHED_MOVIES',
  value => {
    return axiosInstance
      .get(searchMovieRequestURL(value))
      .then(r => r.data.results);
  }
);

const searchedMoviesReducer = createReducer([], {
  [getSearchedMovies.fulfilled]: (state, action) => {
    return action.payload.filter(item => item.backdrop_path);
  },
});

export default searchedMoviesReducer;
