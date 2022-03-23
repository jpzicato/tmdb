import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { StyledContainer } from './style';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { deleteItemDescription } from '../../store/itemDescription';
import CloseIcon from '@mui/icons-material/Close';

function Description() {
  const itemDescription = useSelector(state => state.itemDescription);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const favorites = useMatch('/favorites/description');

  const handleCloseDescription = () => {
    dispatch(deleteItemDescription());
  };

  useEffect(() => {
    if (!itemDescription.title && params.collection) {
      navigate(`/${params.collection}`);
    } else if (!itemDescription.title && params.value) {
      navigate(`/search/${params.value}`);
    } else if (!itemDescription.title && params.userId) {
      navigate(`/users/${params.userId}`);
    } else if (!itemDescription.title && favorites) {
      navigate('/favorites');
    }
  }, [itemDescription, params, favorites, navigate]);

  return itemDescription.title ? (
    <StyledContainer>
      <CssBaseline />
      <Container className='gradient' sx={{ width: '100vw' }}>
        <Box className='container'>
          <div className='container__header'>
            <h1 className='header__title'>{itemDescription.title}</h1>
            <CloseIcon
              className='header__button'
              onClick={handleCloseDescription}
            />
          </div>
          <img
            src={itemDescription.imageURL}
            alt='Movie not found'
            className='container__image'
          />
          <p className='container__overview'>{itemDescription.overview}</p>
        </Box>
      </Container>
    </StyledContainer>
  ) : (
    <h1>Description not found</h1>
  );
}

export default Description;
