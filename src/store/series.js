import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { serieRequestURL } from '../utils/axiosRequests';
import axiosInstance from '../utils/axiosInstance';

export const getAnimationSeries = createAsyncThunk(
  'GET_ANIMATION_SERIES',
  genreId => {
    return axiosInstance
      .get(serieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

export const getCrimeSeries = createAsyncThunk('GET_CRIME_SERIES', genreId => {
  return axiosInstance.get(serieRequestURL(genreId)).then(r => r.data.results);
});

export const getDocumentarySeries = createAsyncThunk(
  'GET_DOCUMENTARY_SERIES',
  genreId => {
    return axiosInstance
      .get(serieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

export const getDramaSeries = createAsyncThunk('GET_DRAMA_SERIES', genreId => {
  return axiosInstance.get(serieRequestURL(genreId)).then(r => r.data.results);
});

export const getMysterySeries = createAsyncThunk(
  'GET_MYSTERY_SERIES',
  genreId => {
    return axiosInstance
      .get(serieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

export const getWesternSeries = createAsyncThunk(
  'GET_WESTERN_SERIES',
  genreId => {
    return axiosInstance
      .get(serieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

const seriesReducer = createReducer(
  {},
  {
    [getAnimationSeries.fulfilled]: (state, action) => {
      state.animation = action.payload.filter(item => item.backdrop_path);
    },
    [getCrimeSeries.fulfilled]: (state, action) => {
      state.crime = action.payload.filter(item => item.backdrop_path);
    },
    [getDocumentarySeries.fulfilled]: (state, action) => {
      state.documentary = action.payload.filter(item => item.backdrop_path);
    },
    [getDramaSeries.fulfilled]: (state, action) => {
      state.drama = action.payload.filter(item => item.backdrop_path);
    },
    [getMysterySeries.fulfilled]: (state, action) => {
      state.mystery = action.payload.filter(item => item.backdrop_path);
    },

    [getWesternSeries.fulfilled]: (state, action) => {
      state.western = action.payload.filter(item => item.backdrop_path);
    },
  }
);

export default seriesReducer;
