const { User } = require('../models');
const handleUserRequest = require('../utils/handleUserRequest');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.sendStatus(401);
}

const register = (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(next);
};

const logIn = (req, res, next) => {
  handleUserRequest(req, res, next);
};

const logOut = (req, res) => {
  req.logOut();
  res.sendStatus(200);
};

module.exports = { isLoggedIn, register, logIn, logOut };
