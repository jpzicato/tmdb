const express = require('express');
const {
  addFavoritesCollectionItem,
  removeFavoritesCollectionItem,
} = require('../controllers/favorites');

const router = express.Router();

router.post('/:userId', addFavoritesCollectionItem);

router.delete('/:userId/:title', removeFavoritesCollectionItem);

module.exports = router;
