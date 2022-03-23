const { User, Favorite } = require('../models');

const addFavoritesCollectionItem = (req, res, next) => {
  User.findByPk(req.params.userId).then(user => {
    Favorite.create(req.body)
      .then(favorite => {
        favorite.setUser(user);
        res.status(201).send(favorite);
      })
      .catch(next);
  });
};

const removeFavoritesCollectionItem = (req, res, next) => {
  Favorite.destroy({
    where: {
      UserId: req.params.userId,
      title: decodeURI(req.params.title),
    },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
};

module.exports = { addFavoritesCollectionItem, removeFavoritesCollectionItem };
