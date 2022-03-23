import React from 'react';
import { StyledContainer } from './style';
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import useDescription from '../../hooks/useDescription';

function UsersCollectionItem({ imageURL, title, overview }) {
  const handleDescriptionClick = useDescription(imageURL, title, overview);

  return (
    <StyledContainer>
      <Link to='description' style={{ color: 'black', textDecoration: 'none' }}>
        <ListItem onClick={handleDescriptionClick}>
          <ListItemButton>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      </Link>
      <Divider />
    </StyledContainer>
  );
}

export default UsersCollectionItem;
