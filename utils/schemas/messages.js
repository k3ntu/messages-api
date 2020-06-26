const Joi = require('@hapi/joi');

const messageIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const messageFirstNameSchema = Joi.string().max(80);
const messageLastNameSchema = Joi.string().max(80);
const messageCodeSchema = Joi.number().integer().default(0);
const messageBodySchema = Joi.string().max(500, 'utf8');
const movieActiveSchema = Joi.boolean().empty('').default(false);

const createMessageSchema = {
  firstName: messageFirstNameSchema.required(),
  lastName: messageLastNameSchema.required(),
  code: messageCodeSchema,
  body: messageBodySchema.required(),
  active: movieActiveSchema,
};

const updateMessageSchema = {
  firstName: messageFirstNameSchema.required(),
  lastName: messageLastNameSchema.required(),
  code: messageCodeSchema,
  body: messageBodySchema.required(),
  active: movieActiveSchema,
};

module.exports = {
  messageIdSchema,
  createMessageSchema: createMessageSchema,
  updateMessageSchema: updateMessageSchema,
};
