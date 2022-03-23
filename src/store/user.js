import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import handleFavorites from '../utils/handleFavorites';

export const getUser = createAsyncThunk('GET_USER', () => {
  return axios.get('/api/user').then(r => r.data);
});

export const sendRegisterRequest = createAsyncThunk('REGISTER', user => {
  return axios
    .post('/api/register', user)
    .then(() => axios.post('/api/login', user))
    .then(r => r.data);
});

export const sendLogInRequest = createAsyncThunk('LOGIN', user => {
  return axios.post('/api/login', user).then(r => r.data);
});

export const sendLogOutRequest = createAsyncThunk('LOGOUT', () => {
  return axios.post('/api/logout');
});

export const addFavoritesCollectionItem = createAsyncThunk(
  'ADD_FAVORITES_COLLECTION_ITEM',
  (collectionItem, thunkAPI) => {
    const { user } = thunkAPI.getState();
    return axios
      .post(`/api/favorites/${user.id}`, collectionItem)
      .then(r => r.data);
  }
);

export const removeFavoritesCollectionItem = createAsyncThunk(
  'REMOVE_FAVORITES_COLLECTION_ITEM',
  (collectionItem, thunkAPI) => {
    const { user } = thunkAPI.getState();
    return axios
      .delete(`/api/favorites/${user.id}/${collectionItem.title}`)
      .then(() => collectionItem);
  }
);

const userReducer = createReducer(
  {},
  {
    [getUser.fulfilled]: (state, action) => {
      action.payload.favorites = action.payload.Favorites;
      delete action.payload.Favorites;
      return { ...action.payload, favorites: handleFavorites(action.payload) };
    },
    [sendRegisterRequest.fulfilled]: (state, action) => {
      action.payload.favorites = action.payload.Favorites;
      delete action.payload.Favorites;
      return { ...action.payload, favorites: handleFavorites(action.payload) };
    },
    [sendLogInRequest.fulfilled]: (state, action) => {
      action.payload.favorites = action.payload.Favorites;
      delete action.payload.Favorites;
      return { ...action.payload, favorites: handleFavorites(action.payload) };
    },
    [sendLogOutRequest.fulfilled]: (state, action) => {
      return {};
    },
    [addFavoritesCollectionItem.fulfilled]: (state, action) => {
      state.favorites[action.payload.collection].push(action.payload);
    },
    [removeFavoritesCollectionItem.fulfilled]: (state, action) => {
      state.favorites[action.payload.collection] = state.favorites[
        action.payload.collection
      ].filter(favoritesCollectionItem => {
        return favoritesCollectionItem.title !== action.payload.title;
      });
    },
  }
);

export default userReducer;
