import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  NotFoundError,
  InternalServerError,
  HttpError,
  MethodNotAllowedError,
} from "@/utils/errors";
import {
  AuthenticatedRequest,
  authenticateJWT,
} from "@/lib/middleware/jwtMiddleware";
import { contactRequestValidater } from "@/helpers/validaters/calibarate";

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const products = await prisma.products.findMany({});
      if (!products.length) throw new NotFoundError("No products found");

      res.status(200).json({
        data: {
          products,
          message: "Products fetched successfully.",
          status: true,
        },
      });
    } catch (error) {
      if (error instanceof HttpError) {
        return error.handleResponse(res);
      }
      return new InternalServerError("An unexpected error occurred").handleResponse(res);
    }
  } else if (req.method === "POST") {
    try {
      console.log(req.body);
      await contactRequestValidater(req, res);
      
      const body = req.body;

      const product = await prisma.products.create({
        data: { ...body },
      });

      res.status(200).json({
        data: {
          product,
          message: "Product saved successfully.",
          status: true,
        },
      });
    } catch (error) {
      if (error instanceof HttpError) {
        return error.handleResponse(res);
      }
      return new InternalServerError("An unexpected error occurred").handleResponse(res);
    }
  } else {
    return new MethodNotAllowedError(`Method ${req.method} Not Allowed`).handleResponse(res);
  }
}

export default authenticateJWT(handler);
