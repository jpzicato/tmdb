import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import { List } from '@mui/material';
import UsersCollectionItem from '../../commons/UsersCollectionItem/UsersCollectionItem';
import Description from '../../commons/Description/Description';
import { StyledContainer } from './style';

function UsersView() {
  const { userId } = useParams();

  const user = useSelector(state => {
    return state.users.find(user => user.id === parseInt(userId));
  });

  return (
    <StyledContainer>
      <Routes>
        <Route path='description' element={<Description />} />
      </Routes>
      <h1 className='name'>{user.name}</h1>
      <h3 className='email'>{user.email}</h3>
      <div className='favorites'>
        <h1 className='favorites__title'>Favorites</h1>
        <div className='favorites__container'>
          <div>
            <h1 className='container__title'>Movies</h1>
            <List component='nav' aria-label='mailbox folders'>
              {user.favorites.movies.map(
                ({ id, imageURL, title, overview }) => (
                  <UsersCollectionItem
                    key={id}
                    imageURL={imageURL}
                    title={title}
                    overview={overview}
                  />
                )
              )}
            </List>
          </div>
          <div>
            <h1 className='favorites__title'>Series</h1>
            <List component='nav' aria-label='mailbox folders'>
              {user.favorites.series.map(
                ({ id, imageURL, title, overview }) => (
                  <UsersCollectionItem
                    key={id}
                    imageURL={imageURL}
                    title={title}
                    overview={overview}
                  />
                )
              )}
            </List>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default UsersView;
