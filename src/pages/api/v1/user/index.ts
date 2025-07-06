import { adminRequestValidator } from "@/helpers/validaters/calibarate";
import { authenticateJWT } from "@/lib/middleware/jwtMiddleware";
import prisma from "@/loaders/prisma";
import { handleValidationError } from "@/utils/errorHandler";
import { MethodNotAllowedError } from "@/utils/errors";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // You can handle different HTTP methods here
  if (req.method === "GET") {
    let users = await prisma.admin.findMany({});

    res
      .status(200)
      .json({ data: { users }, message: "Users fetched successfully" });
  } else if (req.method === "POST") {
    try {
      await adminRequestValidator(req, res);
      const body = req.body;

      const admin = await prisma.admin.create({
        data: { ...body },
      });

      res.status(200).json({
        data: {
          User:admin,
          message: "User saved successfully.",
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
// export default handler;`
