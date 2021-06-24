const db = require('../../db/connection');

const users = db.get('users');
const guesses = db.get('guesses');
const games = db.get('games');

module.exports = {
  users,
  guesses,
  games
};