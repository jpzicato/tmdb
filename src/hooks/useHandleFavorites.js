import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoritesCollectionItem,
  removeFavoritesCollectionItem,
} from '../store/user';

function useAddToFavorites(imageURL, title, overview, collection) {
  const [item, setItem] = useState(null);
  const [itemStyle, setItemStyle] = useState('rotate(0deg)');

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.user.favorites);

  useEffect(() => {
    setItem(!!favorites[collection].find(favorite => favorite.title === title));
  }, [collection, favorites, title]);

  useEffect(() => {
    if (!item) {
      setItemStyle('rotate(0deg)');
    } else {
      setItemStyle('rotate(45deg)');
    }
  }, [item]);

  const handleAddToFavoritesClick = () => {
    if (!item) {
      dispatch(
        addFavoritesCollectionItem({
          imageURL,
          title,
          overview,
          collection,
        })
      );
      setItem(true);
    } else {
      dispatch(
        removeFavoritesCollectionItem({
          imageURL,
          title,
          overview,
          collection,
        })
      );
      setItem(null);
    }
  };

  return { handleAddToFavoritesClick, itemStyle };
}

export default useAddToFavorites;
