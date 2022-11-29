const comitSchema = require('./games.schema');
const {
  games
} = require('./games.model');

const validateGame = (req, res, next) => {
  const result = comitSchema.validate(req.body);
  if (!result.error) {
    next();
  } else {
    res.status(422);
    next(result.error);
  }
}

const gameExists = async (req, res, next) => {
  try {
    const game = await games.findOne({
      _id: req.body.gameId
    });
    if (game) {
      req.game = game;
      next();
    } else {
      res.status(400);
      next(new Error('Game not found'));
    }
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const isAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(401);
    next(new Error('Unauthorized'));
  }
}

module.exports = {
  validateGame,
  isAdmin,
  gameExists
}