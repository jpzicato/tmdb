const { User, Favorite } = require('../models');

const getUsers = (req, res, next) => {
  User.findAll({ include: Favorite })
    .then(users => {
      res.send(users.filter(user => user.id !== req.user.id));
    })
    .catch(next);
};

module.exports = getUsers;
