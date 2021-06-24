const express = require('express');

const controller = require('./guesses.controller');
const middlewares = require('./guesses.middlewares');

const router = express.Router();

router.get('/list',
  controller.list);
router.get('/myguesses',
  controller.listmyguesses);
router.post('/guess',
  middlewares.validateGuess,
  middlewares.gameExistsAndAllowed,
  controller.guess);

module.exports = router;