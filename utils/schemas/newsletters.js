const Joi = require('@hapi/joi');

const newsletterIdSchema        = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const newsletterNameSchema      = Joi.string().max(70);
const newsletterResidenceSchema = Joi.string().max(30);
const newsletterEmailSchema     = Joi.string().email();

const createNewsletterSchema = {
  name: newsletterNameSchema.required(),
  residence: newsletterResidenceSchema.required(),
  email: newsletterEmailSchema.required()
};

const updateNewsletterSchema = {
  name: newsletterNameSchema.required(),
  residence: newsletterResidenceSchema.required(),
  email: newsletterEmailSchema.required()
};

module.exports = {
  newsletterIdSchema,
  createNewsletterSchema,
  updateNewsletterSchema
};
