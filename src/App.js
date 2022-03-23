import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthView from './components/AuthView/AuthView';
import HomeView from './components/HomeView/HomeView';
import CollectionView from './components/CollectionView/CollectionView';
import Navbar from './components/Navbar/Navbar';
import { getUser } from './store/user';
import GlobalStyles from './GlobalStyles';
import FavoritesView from './components/FavoritesView/FavoritesView';
import SearchView from './components/SearchView/SearchView';
import UsersView from './components/UsersView/UsersView';

function App() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const itemDescriptionTitle = useSelector(
    state => state.itemDescription.title
  );

  useEffect(() => {
    return dispatch(getUser());
  }, [dispatch]);

  return !userId ? (
    <Routes>
      <Route path='/' element={<AuthView />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  ) : (
    <>
      <GlobalStyles scroll={itemDescriptionTitle} />
      <Navbar />
      <Routes>
        <Route path='/home' element={<HomeView />} />
        <Route path='/:collection/*' element={<CollectionView />} />
        <Route path='/favorites/*' element={<FavoritesView />} />
        <Route path='/search/:value/*' element={<SearchView />} />
        <Route path='/users/:userId/*' element={<UsersView />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </>
  );
}

export default App;
