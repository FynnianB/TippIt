const express = require('express');
const helmet = require('helmet');
const volleyball = require('volleyball');
const cors = require("cors");

require('dotenv').config();

const app = express();

const middlewares = require('./auth/auth.middlewares');

const auth = require('./auth/auth.routes');
const guesses = require('./api/guesses/guesses.routes');
const games = require('./api/games/games.routes');

app.use(volleyball);
const client = process.env.CLIENT_URL
app.use(cors({
  origin: [client],
}));
app.use(express.json());
app.use(helmet());

app.use(middlewares.checkTokenSetUser)

app.get('/', (req, res) => {
  res.send('Working!')
});

app.use('/auth', auth);
app.use('/api/v1/guesses', middlewares.isLoggedIn, guesses);
app.use('/api/v1/games', middlewares.isLoggedIn, games);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found -', req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => {
  console.log('Listening on port', port)
})