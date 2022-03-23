import React from 'react';
import { List } from '@mui/material';
import { StyledContainer } from './style';
import CollectionFavoritesItem from '../CollectionFavoritesItem/CollectionFavoritesItem';

function CollectionFavorites({ collectionName, collection }) {
  return (
    <StyledContainer>
      <h1>{collectionName}</h1>
      <List component='nav' aria-label='mailbox folders'>
        {collection.length ? (
          collection.map(collectionItem => (
            <CollectionFavoritesItem
              key={collectionItem.id}
              {...collectionItem}
            />
          ))
        ) : (
          <h3>{`There are no favorites ${
            collectionName[0].toLowerCase() + collectionName.slice(1)
          }`}</h3>
        )}
      </List>
    </StyledContainer>
  );
}

export default CollectionFavorites;
