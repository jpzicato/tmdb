import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './style';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import useDescription from '../../hooks/useDescription';
import useHandleFavorites from '../../hooks/useHandleFavorites';

const base_url = 'https://image.tmdb.org/t/p/original';

function CollectionItem({ imageURL, title, overview, collection }) {
  const handleDescriptionClick = useDescription(
    `${base_url}${imageURL}`,
    title,
    overview
  );

  const { handleAddToFavoritesClick, itemStyle } = useHandleFavorites(
    `${base_url}${imageURL}`,
    title,
    overview,
    collection
  );

  return (
    <StyledContainer>
      <img
        src={`${base_url}${imageURL}`}
        alt='Item not found'
        className='image'
      />
      <div className='icons'>
        <Link to='description' className='description'>
          <InfoIcon
            onClick={handleDescriptionClick}
            className='description__icon'
          />
        </Link>
        <AddIcon
          onClick={handleAddToFavoritesClick}
          className='addToFavorites__icon'
          style={{ transform: itemStyle }}
        />
      </div>
    </StyledContainer>
  );
}

export default CollectionItem;
