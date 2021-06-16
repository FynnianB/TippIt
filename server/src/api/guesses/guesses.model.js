const db = require('../../db/connection');

const users = db.get('users');
const guesses = db.get('guesses');

module.exports = {
  users,
  guesses
};