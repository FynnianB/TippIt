const db = require('../../db/connection');

const guesses = db.get('guesses');
const games = db.get('games');

module.exports = {
  guesses,
  games
};