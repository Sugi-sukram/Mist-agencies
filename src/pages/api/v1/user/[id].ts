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
      if (error instanceof HttpError) {
        return error.handleResponse(res);
      }
      return new InternalServerError(
        "An unexpected error occurred"
      ).handleResponse(res);
    }
  } else {
    return new MethodNotAllowedError(
      `Method ${req.method} Not Allowed`
    ).handleResponse(res);
  }
}

export default authenticateJWT(handler);
// export default handler;
