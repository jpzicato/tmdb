import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { movieRequestURL } from '../utils/axiosRequests';
import axiosInstance from '../utils/axiosInstance';

export const getActionMovies = createAsyncThunk(
  'GET_ACTION_MOVIES',
  genreId => {
    return axiosInstance
      .get(movieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

export const getAdventureMovies = createAsyncThunk(
  'GET_ADVENTURE_MOVIES',
  genreId => {
    return axiosInstance
      .get(movieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

export const getCrimeMovies = createAsyncThunk('GET_CRIME_MOVIES', genreId => {
  return axiosInstance.get(movieRequestURL(genreId)).then(r => r.data.results);
});

export const getDocumentaryMovies = createAsyncThunk(
  'GET_DOCUMENTARY_MOVIES',
  genreId => {
    return axiosInstance
      .get(movieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

export const getDramaMovies = createAsyncThunk('GET_DRAMA_MOVIES', genreId => {
  return axiosInstance.get(movieRequestURL(genreId)).then(r => r.data.results);
});

export const getHorrorMovies = createAsyncThunk(
  'GET_HORROR_MOVIES',
  genreId => {
    return axiosInstance
      .get(movieRequestURL(genreId))
      .then(r => r.data.results);
  }
);

const moviesReducer = createReducer(
  {},
  {
    [getActionMovies.fulfilled]: (state, action) => {
      state.action = action.payload.filter(item => item.backdrop_path);
    },
    [getAdventureMovies.fulfilled]: (state, action) => {
      state.adventure = action.payload.filter(item => item.backdrop_path);
    },
    [getCrimeMovies.fulfilled]: (state, action) => {
      state.crime = action.payload.filter(item => item.backdrop_path);
    },
    [getDocumentaryMovies.fulfilled]: (state, action) => {
      state.documentary = action.payload.filter(item => item.backdrop_path);
    },
    [getDramaMovies.fulfilled]: (state, action) => {
      state.drama = action.payload.filter(item => item.backdrop_path);
    },
    [getHorrorMovies.fulfilled]: (state, action) => {
      state.horror = action.payload.filter(item => item.backdrop_path);
    },
  }
);

export default moviesReducer;
