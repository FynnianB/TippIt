const express = require('express');

const controller = require('./guesses.controller');
const middlewares = require('./guesses.middlewares');

const router = express.Router();

router.get('/list/:id',
  middlewares.validateId,
  controller.list);
router.post('/guess',
  middlewares.validateGuess,
  controller.guess);

module.exports = router;