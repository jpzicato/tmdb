import React from 'react';
import { useDispatch } from 'react-redux';
import { useMatch, Link, useNavigate } from 'react-router-dom';
import { sendLogOutRequest } from '../../store/user';
import { StyledContainer } from './style';

import SearchContainer from '../../commons/SearchContainer/SearchContainer';
import UsersContainer from '../../commons/UsersContainer/UsersContainer';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const home = useMatch('/home');
  const movies = useMatch('/movies');
  const series = useMatch('/series');
  const favorites = useMatch('/favorites');

  const handleClick = () => {
    dispatch(sendLogOutRequest()).then(() => navigate('/'));
  };

  return (
    <StyledContainer>
      <Link to='/' className='title'>
        TMDB
      </Link>
      {!home && (
        <div className='links'>
          <Link to='movies' className={`link ${movies && 'active'}`}>
            Movies
          </Link>
          <Link to='series' className={`link ${series && 'active'}`}>
            Series
          </Link>
          <Link to='favorites' className={`link ${favorites && 'active'}`}>
            Favorites
          </Link>
        </div>
      )}
      <div className='rightSide'>
        <SearchContainer />
        <UsersContainer />
        <button onClick={handleClick} className='rightSide__logout'>
          Log Out
        </button>
      </div>
    </StyledContainer>
  );
}

export default Navbar;
