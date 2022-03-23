import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import { searchSerieRequestURL } from '../utils/axiosRequests';

export const getSearchedSeries = createAsyncThunk(
  'GET_SEARCHED_SERIES',
  value => {
    return axiosInstance
      .get(searchSerieRequestURL(value))
      .then(r => r.data.results);
  }
);

const searchedSeriesReducer = createReducer([], {
  [getSearchedSeries.fulfilled]: (state, action) => {
    return action.payload.filter(item => item.backdrop_path);
  },
});

export default searchedSeriesReducer;
