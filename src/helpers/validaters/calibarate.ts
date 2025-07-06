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
    description: Joi.string().required(),
  }),
});
export const adminRequestValidator = celebrate({
  body: Joi.object({
    name: Joi.string().optional(), // Optional name
    email: Joi.string().email().required(), // Email must be valid and required
    mobile: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required(), // Mobile number, must be 10 digits
    profileURL: Joi.string().optional().uri().allow("").allow(null), // Optional profile URL (if provided, should be a valid URI)
    isActive: Joi.boolean().default(true), // Default value for isActive is true
    isProductOwner: Joi.boolean().default(false), // Default value for isProductOwner is false
    address: Joi.string().optional(), // Optional address
    pincode: Joi.string().optional(), // Optional pincode
    password: Joi.string().min(6).required(), // Password is required and should be at least 6 characters
    city: Joi.string().default("Coimbatore"), // Default city is Coimbatore
    state: Joi.string().default("Tamil Nadu"), // Default state is Tamil Nadu
    country: Joi.string().default("India"), // Default country is India
    lastLogin: Joi.date().optional(), // lastLogin should be a valid date if provided
  }),
});
