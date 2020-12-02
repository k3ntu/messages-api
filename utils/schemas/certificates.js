const Joi = require('@hapi/joi');

const certificateIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const certificateNameSchema = Joi.string().max(80);
const certificateEmailSchema = Joi.string().email();
const certificateDniSchema = Joi.string().default('12345678');
const certificateCourseSchema = Joi.number().integer().default(0);

const createCertificateSchema = {
  name: certificateNameSchema.required(),
  email: certificateEmailSchema.required(),
  dni: certificateDniSchema.required(),
  course: certificateCourseSchema
};

const updateCertificateSchema = {
  name: certificateNameSchema.required(),
  email: certificateEmailSchema.required(),
  dni: certificateDniSchema.required(),
  course: certificateCourseSchema
};

module.exports = {
  certificateIdSchema,
  createCertificateSchema: createCertificateSchema,
  updateCertificateSchema: updateCertificateSchema,
};
