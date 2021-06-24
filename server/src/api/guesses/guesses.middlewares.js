const guessSchema = require('./guesses.schema');
const {
  games
} = require('./guesses.model');

const validateGuess = (req, res, next) => {
  const result = guessSchema.validate(req.body);
  if (!result.error) {
    next();
  } else {
    res.status(422);
    next(result.error);
  }
}

const gameExistsAndAllowed = async (req, res, next) => {
  try {
    const game = await games.findOne({
      _id: req.body.gameId
    });
    if (game) {
      const gameStart = new Date(game.date).getTime();
      if (Date.now() < gameStart) {
        next();
      } else {
        res.status(400);
        next(new Error('Game already started'));
      }
    } else {
      res.status(400);
      next(new Error('Game not found'));
    }
  } catch (error) {
    res.status(500);
    next(error);
  }
}

module.exports = {
  validateGuess,
  gameExistsAndAllowed
}