import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import CollectionContainer from '../../commons/CollectionContainer/CollectionContainer';
import Description from '../../commons/Description/Description';
import { moviesData, seriesData } from '../../utils/collectionsData';
import { StyledContainer } from './style';

function CollectionView() {
  const [collectionData, setCollectionData] = useState([]);

  const { collection } = useParams();

  useEffect(() => {
    if (collection === 'movies') {
      setCollectionData(moviesData);
    } else {
      setCollectionData(seriesData);
    }
  }, [collection]);

  return (
    <StyledContainer>
      <Routes>
        <Route path='description' element={<Description />} />
      </Routes>
      {collectionData.length ? (
        collectionData.map(({ id, title, name, actionCreator, genreId }) => (
          <CollectionContainer
            key={id}
            title={title}
            name={name}
            actionCreator={actionCreator}
            genreId={genreId}
          />
        ))
      ) : (
        <h1>{`No ${collection} found`}</h1>
      )}
    </StyledContainer>
  );
}

export default CollectionView;
