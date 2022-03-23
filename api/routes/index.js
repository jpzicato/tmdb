const express = require('express');
const passport = require('passport');
const auth = require('../controllers/auth');
const userRouter = require('./user');
const usersRouter = require('./users');
const favoritesRouter = require('./favorites');

const router = express.Router();

router.post('/register', auth.register);

router.post('/login', passport.authenticate('local'), auth.logIn);

router.post('/logout', auth.logOut);

router.use('/user', auth.isLoggedIn, userRouter);

router.use('/users', auth.isLoggedIn, usersRouter);

router.use('/favorites', auth.isLoggedIn, favoritesRouter);

module.exports = router;
