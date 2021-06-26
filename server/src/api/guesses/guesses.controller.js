const {
  guesses,
  games,
  users
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
        username: req.user.username,
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
};

const list = async (req, res, next) => {
  try {
    const dataArray = [];
    const foundUsers = await users.find({
      active: true
    });
    if (foundUsers && foundUsers.length > 0) {
      await new Promise((resolve, reject) => {
        foundUsers.forEach(async (user, i, array) => {
          const userItem = {
            userId: user._id,
            username: user.username
          };
          let points = 0;
          const foundGuesses = await guesses.find({
            userId: user._id.toString(),
          });
          if (foundGuesses && foundGuesses.length > 0) {
            await new Promise((resolve, reject) => {
              foundGuesses.forEach(async (guess, j, inner_array) => {
                let value = guess.home + ':' + guess.away;
                if (guess.points) {
                  value = value + ' (' + guess.points + ')';
                  points += guess.points;
                }
                userItem[guess.gameId] = value;
                if (inner_array.length - 1 === j) resolve();
              });
            });
          }

          userItem['points'] = points;
          dataArray.push(userItem);
          if (array.length - 1 === i) resolve();
        });
      });
    }
    res.json(dataArray);
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