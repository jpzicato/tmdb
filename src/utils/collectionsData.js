import {
  getActionMovies,
  getAdventureMovies,
  getCrimeMovies,
  getDocumentaryMovies,
  getDramaMovies,
  getHorrorMovies,
} from '../store/movies';

import {
  getAnimationSeries,
  getCrimeSeries,
  getDocumentarySeries,
  getDramaSeries,
  getMysterySeries,
  getWesternSeries,
} from '../store/series';

export const moviesData = [
  {
    id: 123855321,
    title: 'Action',
    name: 'action',
    actionCreator: getActionMovies,
    genreId: 28,
  },
  {
    id: 433425783,
    title: 'Adventure',
    name: 'adventure',
    actionCreator: getAdventureMovies,
    genreId: 12,
  },
  {
    id: 244543218,
    title: 'Crime',
    name: 'crime',
    actionCreator: getCrimeMovies,
    genreId: 80,
  },
  {
    id: 224566451,
    title: 'Documentary',
    name: 'documentary',
    actionCreator: getDocumentaryMovies,
    genreId: 99,
  },
  {
    id: 542234499,
    title: 'Drama',
    name: 'drama',
    actionCreator: getDramaMovies,
    genreId: 18,
  },
  {
    id: 152811453,
    title: 'Horror',
    name: 'horror',
    actionCreator: getHorrorMovies,
    genreId: 27,
  },
];

export const seriesData = [
  {
    id: 456778511,
    title: 'Animation',
    name: 'animation',
    actionCreator: getAnimationSeries,
    genreId: 16,
  },
  {
    id: 115278446,
    title: 'Crime',
    name: 'crime',
    actionCreator: getCrimeSeries,
    genreId: 80,
  },
  {
    id: 753159885,
    title: 'Documentary',
    name: 'documentary',
    actionCreator: getDocumentarySeries,
    genreId: 99,
  },
  {
    id: 111254447,
    title: 'Drama',
    name: 'drama',
    actionCreator: getDramaSeries,
    genreId: 18,
  },
  {
    id: 125469833,
    title: 'Mystery',
    name: 'mystery',
    actionCreator: getMysterySeries,
    genreId: 9648,
  },
  {
    id: 778854321,
    title: 'Western',
    name: 'western',
    actionCreator: getWesternSeries,
    genreId: 37,
  },
];
