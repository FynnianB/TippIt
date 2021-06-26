const db = require('../../db/connection');

const guesses = db.get('guesses');
const games = db.get('games');
const users = db.get('users');

module.exports = {
  guesses,
  games,
  users
};