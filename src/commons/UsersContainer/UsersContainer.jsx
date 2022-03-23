import React, { useEffect, useState } from 'react';
import { StyledContainer } from './style';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/users';
import { useNavigate } from 'react-router-dom';

function UsersContainer() {
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const navigate = useNavigate();

  const handleChange = event => {
    setUserId(event.target.value);
  };

  const handleClick = () => {
    navigate(`/users/${userId}`);
  };

  useEffect(() => {
    return dispatch(getUsers());
  }, [dispatch]);

  return (
    <StyledContainer>
      <FormControl variant='standard' className='form'>
        <div className='dropdown__container'>
          <InputLabel id='demo-simple-select-standard-label' className='label'>
            Select an user
          </InputLabel>
          <Select
            id='demo-simple-select-standard'
            labelId='demo-simple-select-standard-label'
            label='Select an user'
            value={userId}
            onChange={handleChange}
            className='select'
          >
            {users.length &&
              users.map(user => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
          </Select>
        </div>
        <ArrowForwardIosIcon className='search' onClick={handleClick} />
      </FormControl>
    </StyledContainer>
  );
}

export default UsersContainer;
