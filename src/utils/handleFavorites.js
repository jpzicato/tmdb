const handleFavorites = user => {
  const movies = [];
  const series = [];
  user.favorites.forEach(favorite => {
    if (favorite.collection === 'movies') movies.push(favorite);
    else series.push(favorite);
  });
  return { movies, series };
};

export default handleFavorites;
