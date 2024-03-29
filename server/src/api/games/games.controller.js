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
      stage: req.body.stage,
      event: req.body.event
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
    const foundGames = await games.find({
      event: 'wm2022'
    });
    res.json(foundGames);
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const listGroupStage = async (req, res, next) => {
  try {
    const foundGames = await games.find({
      event: 'wm2022',
      stage: 'group'
    });
    const groups = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
    for (let i = 0; i < foundGames.length; i++) {
      const game = foundGames[i];
      game.date_day = new Date(game.date).toLocaleDateString('de-DE', {
        weekday: 'short',
        day: 'numeric',
        month: 'numeric'
      });
      game.date_time = new Date(game.date).toLocaleTimeString('de-DE', {
        hour: 'numeric',
        minute: 'numeric'
      })
      groups[alphabetPosition(game.group)].push(game);
    }
    res.json(groups);
  } catch (error) {
    res.status(500);
    next(error);
  }
}

const gameInfo = async (req, res, next) => {
  try {
    let foundGuesses = [];
    if (new Date(req.game.date).getTime() < Date.now()) {
      foundGuesses = await guesses.find({
        gameId: req.body.gameId
      });
    }
    res.json({
      ...req.game,
      guesses: foundGuesses
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
}

function alphabetPosition(text) {
  return [...text].map(a => parseInt(a, 36) - 10).filter(a => a >= 0);
}

module.exports = {
  commitGame,
  insertGame,
  list,
  listGroupStage,
  gameInfo,
}