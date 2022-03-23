import { configureStore } from '@reduxjs/toolkit';
import itemDescriptionReducer from './itemDescription';
import userReducer from './user';
import moviesReducer from './movies';
import seriesReducer from './series';
import searchedMoviesReducer from './searchedMovies';
import searchedSeriesReducer from './searchedSeries';
import usersReducer from './users';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    series: seriesReducer,
    itemDescription: itemDescriptionReducer,
    searchedMovies: searchedMoviesReducer,
    searchedSeries: searchedSeriesReducer,
    users: usersReducer,
  },
});

export default store;
