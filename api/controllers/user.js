const handleUserRequest = require('../utils/handleUserRequest');

const getUser = function (req, res, next) {
  handleUserRequest(req, res, next);
};

module.exports = getUser;
