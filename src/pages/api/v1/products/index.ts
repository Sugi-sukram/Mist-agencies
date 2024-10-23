import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  NotFoundError,
  MethodNotAllowedError,
} from "@/utils/errors";
import {
  AuthenticatedRequest,
  authenticateJWT,
} from "@/lib/middleware/jwtMiddleware";
import { productRequestValidater } from "@/helpers/validaters/calibarate";
import { handleValidationError } from "@/utils/errorHandler";

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
      handleValidationError(error, res);
    }
  } else if (req.method === "POST") {
    try {
     await productRequestValidater(req, res);
      const body = req.body;

      const product = await prisma.products.create({
        data: { ...body },
      });

      res.status(200).json({
        data: {
          // product,
          message: "Product saved successfully.",
          status: true,
        },
      });
    } catch (error) {
      handleValidationError(error, res);
    }
  } else {
    return new MethodNotAllowedError(`Method ${req.method} Not Allowed`).handleResponse(res);
  }
}

export default authenticateJWT(handler);
