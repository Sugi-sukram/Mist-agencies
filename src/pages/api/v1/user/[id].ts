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
import { handleValidationError } from "@/utils/errorHandler";
import { adminRequestValidator } from "@/helpers/validaters/calibarate";

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const userId = req.query.id;
      const user = await prisma.admin.findFirst({
        where: { id: req.user?.id },
        omit: {
          password: true,
        },
      });
      if (!user) throw new NotFoundError("User not found");
      res.status(200).json({
        data: {
          user,
          message: "User fetched successfully.",
          status: true,
        },
      });
    } catch (error) {
      handleValidationError(error, res);
    }
  } else if (req.method === "PUT") {
    try {
      await adminRequestValidator(req, res);
      const body = req.body;
      const id = req.query.id as string;

      const admin = await prisma.admin.update({
        where: { id },
        data: { ...body },
      });

      res.status(200).json({
        data: {
          user: admin,
          message: "User updated successfully.",
          status: true,
        },
      });
    } catch (error) {
      handleValidationError(error, res);
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.query.id as string;
      await prisma.admin.delete({
        where: { id },
      });

      res.status(200).json({
        message: "User deleted successfully.",
        status: true,
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

export default authenticateJWT(handler);
// export default handler;
