import React, { useState } from 'react';
import AuthForm from '../../commons/AuthForm/AuthForm';
import useViewToShow from '../../hooks/useViewToShow';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { StyledContainer } from './style';
import MovieImage from '../../assets/MovieImage.png';

function AuthView() {
  const [type, setType] = useState('register');

  const { data, handleClick } = useViewToShow(type, setType);

  return (
    <StyledContainer>
      <CssBaseline />
      <div className='header'>
        <h1 className='header__title'>Welcome to the Movie DataBase</h1>
        <img src={MovieImage} alt='Not found' className='header__image' />
      </div>
      <Container maxWidth='sm'>
        <Box
          className='container'
          style={type === 'register' ? { height: '49vh' } : { height: '42vh' }}
        >
          <h1 className='container__title'>{data.name}</h1>
          <AuthForm type={type} />
          <div className='description'>
            {data.description}{' '}
            <strong onClick={handleClick}>{data.linkDescription}</strong>
          </div>
        </Box>
      </Container>
    </StyledContainer>
  );
}

export default AuthView;
