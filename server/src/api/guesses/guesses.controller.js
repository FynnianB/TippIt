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
    const resArray = [];
    const foundGames = await games.find({});
    if (foundGames && foundGames.length > 0) {
      for (let i = 0; i < foundGames.length; i++) {
        const game = foundGames[i];
        const foundGuess = await guesses.findOne({
          gameId: game._id.toString(),
          userId: req.user._id.toString()
        });
        if (foundGuess) {
          game.guess = foundGuess;
        }
        resArray.push(game);
      }
    }
    res.json(resArray);
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
      for (let i = 0; i < foundUsers.length; i++) {
        const user = foundUsers[i];
        const userItem = {
          userId: user._id,
          username: user.username
        };
        let points = 0;
        const foundGuesses = await guesses.find({
          userId: user._id.toString(),
        });
        if (foundGuesses && foundGuesses.length > 0) {
          for (let j = 0; j < foundGuesses.length; j++) {
            const guess = foundGuesses[j];
            let value = guess.home + ':' + guess.away;
            if (!guess.points) guess.points = 0;
            value = value + ' (' + guess.points + ')';
            points += guess.points;
            userItem[guess.gameId] = value;
          }
        }
        userItem['points'] = points;
        dataArray.push(userItem);
      }
    }
    res.json(dataArray);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

const listpoints = async (req, res, next) => {
  try {
    const dataArray = [];
    const foundUsers = await users.find({
      active: true
    });
    if (foundUsers && foundUsers.length > 0) {
      for (let i = 0; i < foundUsers.length; i++) {
        const user = foundUsers[i];
        const userItem = {
          userId: user._id,
          username: user.username
        };
        let points = 0;
        const foundGuesses = await guesses.find({
          userId: user._id.toString(),
        });
        if (foundGuesses && foundGuesses.length > 0) {
          for (let j = 0; j < foundGuesses.length; j++) {
            const guess = foundGuesses[j];
            if (!Number.isInteger(guess.points)) {
              guess.points = 0;
            }
            const game = await games.findOne({
              _id: guess.gameId
            })
            points += guess.points;
            if (Number.isInteger(userItem[game.stage])) {
              userItem[game.stage] += guess.points;
            } else {
              userItem[game.stage] = guess.points;
            }
          }
        }
        userItem['points'] = points;
        dataArray.push(userItem);
      }
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
  list,
  listpoints
}