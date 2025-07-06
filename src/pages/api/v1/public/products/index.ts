import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { NotFoundError, MethodNotAllowedError } from "@/utils/errors";
import { handleValidationError } from "@/utils/errorHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const products = (await prisma.products.findMany({})) || [];

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
  } else {
    return new MethodNotAllowedError(
      `Method ${req.method} Not Allowed`
    ).handleResponse(res);
  }
}

export default handler;
