const express = require('express');
const volleyball = require('volleyball');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const auth = require('./config/auth');
const routes = require('./routes');
const db = require('./db');

const app = express();

app.use(volleyball);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(
  session({
    secret: 'user',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(auth.localStrategyInstance);

passport.serializeUser(auth.serializeUserCb);

passport.deserializeUser(auth.deserializeUserCb);

app.use('/api', routes);

app.use('/api', (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log('Server listening on port 3000'));
});
