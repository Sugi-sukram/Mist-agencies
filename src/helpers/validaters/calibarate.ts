import user from "@/pages/api/v1/user";
import { celebrate, Joi } from "celebrate";

export const loginValidater = celebrate({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

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

export const productRequestValidater = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    unit: Joi.string().required(),
    volume: Joi.string().required(),
    packSize: Joi.string().required(),
    originalPrice: Joi.string().required(),
    discountPrice: Joi.string().required(),
    imageUrl: Joi.string().required(),
  }),
});
