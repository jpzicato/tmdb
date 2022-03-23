import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import { StyledContainer } from './style';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CollectionContainer({ title, name, actionCreator, genreId }) {
  const { collection } = useParams();

  const dispatch = useDispatch();
  const state = useSelector(state => state[collection]);
  const itemDescription = useSelector(state => state.itemDescription);

  useEffect(() => {
    return dispatch(actionCreator(genreId));
  }, [dispatch, actionCreator, genreId]);

  return (
    <StyledContainer>
      <h2 className='title'>{title}</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        autoPlay={false}
        arrows={itemDescription.title ? false : true}
      >
        {state[name] ? (
          state[name].map(
            ({ id, backdrop_path, title, original_title, name, overview }) => {
              if (!backdrop_path) return null;
              return (
                <CollectionItem
                  key={id}
                  imageURL={backdrop_path}
                  title={title || original_title || name}
                  overview={overview}
                  collection={collection}
                />
              );
            }
          )
        ) : (
          <h1>{`No ${collection} found`}</h1>
        )}
      </Carousel>
    </StyledContainer>
  );
}

export default CollectionContainer;
