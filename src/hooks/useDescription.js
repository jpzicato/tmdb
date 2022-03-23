import { useDispatch } from 'react-redux';
import { setItemDescription } from '../store/itemDescription';

function useDescription(imageURL, title, overview) {
  const dispatch = useDispatch();

  const handleDescriptionClick = () => {
    return dispatch(
      setItemDescription({
        imageURL,
        title,
        overview,
      })
    );
  };

  return handleDescriptionClick;
}

export default useDescription;
