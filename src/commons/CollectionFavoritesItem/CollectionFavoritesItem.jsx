import React from 'react';
import { StyledContainer } from './style';
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeFavoritesCollectionItem } from '../../store/user';
import { useDispatch } from 'react-redux';
import useDescription from '../../hooks/useDescription';
import { Link } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p/original';

function CollectionFavoritesItem({ collection, imageURL, overview, title }) {
  const dispatch = useDispatch();

  const handleDescriptionClick = useDescription(
    `${base_url}${imageURL}`,
    title,
    overview
  );

  const handleRemoveClick = () => {
    dispatch(
      removeFavoritesCollectionItem({
        imageURL,
        title,
        overview,
        collection,
      })
    );
  };

  return (
    <StyledContainer>
      <div className='list'>
        <Link
          to='description'
          style={{ color: 'black', textDecoration: 'none' }}
        >
          <ListItem className='list__item' onClick={handleDescriptionClick}>
            <ListItemButton>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        </Link>
        <DeleteForeverIcon className='icon' onClick={handleRemoveClick} />
      </div>
      <Divider />
    </StyledContainer>
  );
}

export default CollectionFavoritesItem;
