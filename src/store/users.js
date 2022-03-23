import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import handleFavorites from '../utils/handleFavorites';

export const getUsers = createAsyncThunk('GET_USERS', () => {
  return axios.get('/api/users').then(res => res.data);
});

const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => {
    const users = [];
    action.payload.forEach(user => {
      user.favorites = user.Favorites;
      delete user.Favorites;
      users.push({ ...user, favorites: handleFavorites(user) });
    });
    return users;
  },
});

export default usersReducer;
