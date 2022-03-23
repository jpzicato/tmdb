import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from './style';

function HomeView() {
  return (
    <StyledContainer>
      <div className='content'>
        <h1 className='title'>What do you want to see today?</h1>
        <div className='links'>
          <Link to='/movies' className='link'>
            Movies
          </Link>
          <Link to='/series' className='link'>
            Series
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomeView;
