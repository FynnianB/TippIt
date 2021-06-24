const {
  guesses,
  games
} = require('./guesses.model');

const guess = async (req, res, next) => {
  try {
    const updatedGuess = await guesses.findOneAndUpdate({
      userId: req.user._id,
      gameId: req.body.gameId
    }, {
      $set: {
        home: req.body.home,
        away: req.body.away
      }
    });
    if (!updatedGuess) {
      const newGuess = {
        userId: req.user._id,
        gameId: req.body.gameId,
        home: req.body.home,
        away: req.body.away,
        points: null
      };
      const insertedGuess = await guesses.insert(newGuess);
      res.json(insertedGuess);
    } else {
      res.json(updatedGuess);
    }
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const listmyguesses = async (req, res, next) => {
  try {
    const foundGuesses = await guesses.find({
      userId: req.user._id
    });
    if (foundGuesses && foundGuesses.length > 0) {
      await new Promise((resolve, reject) => {
        foundGuesses.forEach(async (guess, i, array) => {
          const gameInfo = await games.findOne({
            _id: guess.gameId
          });
          if (gameInfo) {
            guess.gameInfo = gameInfo
          }
          if (array.length - 1 === i) resolve();
        });
      });
    }
    res.json(foundGuesses);
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const list = async (req, res, next) => {
  try {
    const foundGuesses = await guesses.find({}, {
      sort: {
        points: 1
      }
    });
    res.json(foundGuesses);
  } catch (error) {
    res.status(500);
    next(error);
  }
}

module.exports = {
  guess,
  listmyguesses,
  list
}