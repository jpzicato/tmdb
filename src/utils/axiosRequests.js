const API_KEY = '51548f48e4388e28ea2cea3d3b008017';

export const movieRequestURL = genreId => {
  return `/discover/movie?with_genres=${genreId}&api_key=${API_KEY}&language=en-US`;
};

export const serieRequestURL = genreId => {
  return `/discover/tv?with_genres=${genreId}&api_key=${API_KEY}&language=en-US`;
};

export const searchMovieRequestURL = value => {
  return `/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&include_adult=false`;
};

export const searchSerieRequestURL = value => {
  return `/search/tv?api_key=${API_KEY}&language=en-US&query=${value}&include_adult=false`;
};
