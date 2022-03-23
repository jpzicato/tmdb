import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import Description from '../../commons/Description/Description';
import SearchSection from '../../commons/SearchSection/SearchSection';
import { getSearchedMovies } from '../../store/searchedMovies';
import { getSearchedSeries } from '../../store/searchedSeries';
import { StyledContainer } from './style';

function SearchView() {
  const { value } = useParams();
  const dispatch = useDispatch();

  const searchedMovies = useSelector(state => state.searchedMovies);
  const searchedSeries = useSelector(state => state.searchedSeries);

  useEffect(() => {
    return dispatch(getSearchedMovies(value)).then(() =>
      dispatch(getSearchedSeries(value))
    );
  }, [dispatch, value]);

  return (
    <StyledContainer>
      <Routes>
        <Route path='description' element={<Description />} />
      </Routes>
      <SearchSection collectionName='Movies' collection={searchedMovies} />
      <SearchSection collectionName='Series' collection={searchedSeries} />
    </StyledContainer>
  );
}

export default SearchView;
