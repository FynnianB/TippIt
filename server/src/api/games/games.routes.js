const express = require('express');

const controller = require('./games.controller');
const middlewares = require('./games.middlewares');

const router = express.Router();

router.get('/list',
  controller.list);
router.post('/insert',
  middlewares.isAdmin,
  controller.insertGame);
router.post('/commit',
  middlewares.isAdmin,
  middlewares.validateGame,
  middlewares.gameExists,
  controller.commitGame);

module.exports = router;