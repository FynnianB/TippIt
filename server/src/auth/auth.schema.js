const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().pattern(new RegExp('^[a-zA-Z0-9_-]+$')).min(5).max(30)
    .required(),
  password: Joi.string().trim().pattern(new RegExp('^\\S*$')).pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}$'))
    .required(),
});

module.exports = schema;
