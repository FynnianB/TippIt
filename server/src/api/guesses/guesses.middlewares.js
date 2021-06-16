const guessSchema = require('./guesses.schema');
const {
  users,
  guesses
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

module.exports = {
  validateGuess
}