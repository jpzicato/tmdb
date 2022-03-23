import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { StyledContainer } from './style';

function SearchSection({ collectionName, collection }) {
  return (
    <StyledContainer>
      <h1 className='title'>{collectionName}</h1>
      <div className='container'>
        {collection.length ? (
          collection.map(
            ({ id, backdrop_path, title, original_title, name, overview }) => (
              <CollectionItem
                key={id}
                imageURL={backdrop_path}
                title={title || name || original_title}
                overview={overview}
                collection={
                  collectionName[0].toLowerCase() + collectionName.slice(1)
                }
              />
            )
          )
        ) : (
          <h2>{`There are no ${
            collectionName[0].toLowerCase() + collectionName.slice(1)
          }`}</h2>
        )}
      </div>
    </StyledContainer>
  );
}

export default SearchSection;
