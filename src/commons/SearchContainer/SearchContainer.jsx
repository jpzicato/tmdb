import React from 'react';
import { StyledContainer } from './style';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../utils/searchConfig';
import useInput from '../../hooks/useInput';

function SearchContainer() {
  const { name, value, handleChange, reset } = useInput('search');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search/${value}`);
    reset();
  };

  return (
    <StyledContainer onSubmit={handleSubmit}>
      <Search className='container'>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search for a movie or serie...'
          inputProps={{ 'aria-label': 'search' }}
          name={name}
          value={value}
          onChange={handleChange}
          required
        />
      </Search>
    </StyledContainer>
  );
}

export default SearchContainer;
