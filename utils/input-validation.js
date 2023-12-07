import Joi from 'joi';

export const urlSchemaValidator = Joi.object({
  originalUrl: Joi.string().required('Original URL should not be empty'),
});
