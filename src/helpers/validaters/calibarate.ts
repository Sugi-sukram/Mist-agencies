import { unit } from "@/prisma/index";
import { celebrate, Joi } from "celebrate";

export const loginValidater = celebrate({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
export const paramswithUUid = celebrate({
  params: Joi.object({
    id: Joi.string().uuid().required(),
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
    unit: Joi.string()
      .valid(...Object.values(unit)) 
      .required(),
    volume: Joi.number().required(),
    packSize: Joi.number().required(),
    originalPrice: Joi.number().required(),
    discountPrice: Joi.number().required(),
    ImageUrl: Joi.string().uri().required(), 
  }),
});