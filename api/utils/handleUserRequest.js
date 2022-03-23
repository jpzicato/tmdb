const { Favorite, User } = require('../models');

const handleUserRequest = function (req, res, next) {
  User.findOne({
    where: {
      id: req.user.id,
    },
    include: Favorite,
  })
    .then(user => res.send(user))
    .catch(next);
};

module.exports = handleUserRequest;
