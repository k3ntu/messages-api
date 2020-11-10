const Joi = require('@hapi/joi');

const messageIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const messageFirstNameSchema = Joi.string().max(80);
const messageLastNameSchema = Joi.string().max(80);
const messageEmailSchema = Joi.string().email();
const messageCodeSchema = Joi.number().integer().default(0);
const messageDateSchema = Joi.number();
const messageBodySchema = Joi.string().max(3000, 'utf8');
const messageTypeSchema = Joi.number().integer().default(0);
const movieActiveSchema = Joi.boolean().empty('').default(false);

const createMessageSchema = {
  firstName: messageFirstNameSchema.required(),
  lastName: messageLastNameSchema.required(),
  email: messageEmailSchema.required(),
  code: messageCodeSchema,
  date: messageDateSchema.required(),
  body: messageBodySchema.required(),
  type: messageTypeSchema.required(),
  active: movieActiveSchema,
};

const updateMessageSchema = {
  firstName: messageFirstNameSchema.required(),
  lastName: messageLastNameSchema.required(),
  email: messageEmailSchema.required(),
  code: messageCodeSchema,
  date: messageDateSchema.required(),
  body: messageBodySchema.required(),
  type: messageTypeSchema.required(),
  active: movieActiveSchema,
};

module.exports = {
  messageIdSchema,
  createMessageSchema: createMessageSchema,
  updateMessageSchema: updateMessageSchema,
};
