import { createReducer, createAction } from '@reduxjs/toolkit';

export const setItemDescription = createAction('setItemDescription');

export const deleteItemDescription = createAction('deleteItemDescription');

const itemDescriptionReducer = createReducer(
  {},
  {
    [setItemDescription]: (state, action) => action.payload,
    [deleteItemDescription]: (state, action) => {
      return {};
    },
  }
);

export default itemDescriptionReducer;
