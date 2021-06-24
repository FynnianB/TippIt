const Joi = require('joi');

const comitSchema = Joi.object({
  gameId: Joi.string().trim().length(24).required(),
  home: Joi.number().integer().min(0).required(),
  away: Joi.number().integer().min(0).required(),
});

module.exports = comitSchema;