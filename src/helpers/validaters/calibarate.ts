import { celebrate, Joi } from "celebrate";

export const contactRequestValidater = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    mobile: Joi.string().required(),
    email: Joi.string().required(),
    packingType: Joi.string().required(),
    units: Joi.string().required(),
    Venue: Joi.string().required(),
    address: Joi.string().required(),
  }),
});
