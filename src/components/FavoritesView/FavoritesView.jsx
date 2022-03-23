import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CollectionFavorites from '../../commons/CollectionFavorites/CollectionFavorites';
import Description from '../../commons/Description/Description';
import { StyledContainer } from './style';

function FavoritesView() {
  const favoritesMovies = useSelector(state => state.user.favorites.movies);
  const favoritesSeries = useSelector(state => state.user.favorites.series);

  return (
    <StyledContainer>
      <Routes>
        <Route path='description' element={<Description />} />
      </Routes>
      <div className='collections'>
        <CollectionFavorites
          collectionName='Movies'
          collection={favoritesMovies || []}
        />
        <CollectionFavorites
          collectionName='Series'
          collection={favoritesSeries || []}
        />
      </div>
    </StyledContainer>
  );
}

export default FavoritesView;
