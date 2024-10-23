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
import { handleValidationError } from "@/utils/errorHandler";

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  const { id } = req.query; // Get the product ID from the query

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid product ID." });
  }

  if (req.method === "GET") {
    try {
      const product = await prisma.products.findUnique({
        where: { id },
      });

      if (!product) throw new NotFoundError("Product not found");

      res.status(200).json({
        data: {
          product,
          message: "Product fetched successfully.",
          status: true,
        },
      });
    } catch (error) {
      if (error instanceof HttpError) {
        return error.handleResponse(res);
      }
      return new InternalServerError("An unexpected error occurred").handleResponse(res);
    }
  } else if (req.method === "PUT") {
    try {
      await contactRequestValidater(req, res);
      const body = req.body;

      const product = await prisma.products.update({
        where: { id },
        data: { ...body },
      });

      res.status(200).json({
        data: {
          product,
          message: "Product updated successfully.",
          status: true,
        },
      });
    } catch (error) {
      handleValidationError(error, res);

    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.products.delete({
        where: { id },
      });

      res.status(200).json({
        message: "Product deleted successfully.",
        status: true,
      });
    } catch (error) {
      handleValidationError(error, res);
    }
  } else {
    return new MethodNotAllowedError(`Method ${req.method} Not Allowed`).handleResponse(res);
  }
}

export default authenticateJWT(handler);
