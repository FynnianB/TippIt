const {
  guesses,
  games
} = require('./games.model');

const commitGame = async (req, res, next) => {
  try {
    const updatedGame = await games.findOneAndUpdate({
      _id: req.body.gameId
    }, {
      $set: {
        homeResult: req.body.home,
        awayResult: req.body.away
      }
    });
    if (updatedGame) {
      const foundGuesses = await guesses.find({
        gameId: req.body.gameId
      });
      if (foundGuesses && foundGuesses.length > 0) {
        await new Promise((resolve, reject) => {
          foundGuesses.forEach(async (guess, i, array) => {
            if (guess.home >= 0 && guess.away >= 0) {
              let userPoints = 0;

              const rD = req.body.home - req.body.away; // resultDiff
              const gD = guess.home - guess.away; // guessDiff
              if ((rD < 0 && gD < 0) || (rD === 0 && gD === 0) || (rD > 0 && gD > 0)) {
                userPoints += 2;
              }
              if (rD === gD) {
                userPoints += 1;
              }
              if (req.body.home - guess.home === 0 && req.body.away - guess.away === 0) {
                userPoints += 1;
              }

              const updatedGuess = await guesses.findOneAndUpdate({
                _id: guess._id
              }, {
                $set: {
                  points: userPoints
                }
              });
              if (updatedGuess.error) {
                res.status(500);
                next(new Error(updatedGuess.error));
              }
            }
            if (array.length - 1 === i) resolve();
          });
        });
      }
    }
    res.json({
      msg: 'Commited, points granted'
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const insertGame = async (req, res, next) => {
  try {
    const newGame = {
      homeTeam: req.body.homeTeam,
      awayTeam: req.body.awayTeam,
      homeResult: req.body.homeResult,
      awayResult: req.body.awayResult,
      date: new Date(req.body.date),
      group: req.body.group,
      stage: req.body.stage
    };
    const insertedGame = await games.insert(newGame);
    res.json(insertedGame);
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const list = async (req, res, next) => {
  try {
    const foundGames = await games.find({});
    res.json(foundGames);
  } catch (error) {
    res.status(500);
    next(error);
  }
}

module.exports = {
  commitGame,
  insertGame,
  list
}