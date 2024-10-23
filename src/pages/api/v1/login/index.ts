import { loginValidater } from "@/helpers/validaters/calibarate";
import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  HttpError,
  MethodNotAllowedError,
} from "@/utils/errors";
import { generateLoginToken } from "@/utils/gendraters";
import {
  AuthenticatedRequest,
  authenticateJWT,
} from "@/lib/middleware/jwtMiddleware";
import config from "@/config";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await loginValidater(req, res);
    try {
      const User = req.body;
      const pass = User.password;
      const logged = await prisma.admin.findFirst({
        where: { OR: [{ email: User.username }, { name: User.username }] },
      });

      if (!logged) throw new NotFoundError("User not found");

      const hash = await bcrypt.compare(pass, logged.password);
      if (!hash) throw new BadRequestError("Wrong password");

      const { password, ...rest } = logged;
      const tokens = generateLoginToken({ ...rest, role: "ADMIN" });

      res.status(200).json({
        data: {
          user: {
            id: logged.id,
            email: logged.email,
            name: `${logged.name}`.trim(),
          },
          token: tokens.token,
          refreshtoken: tokens.refreshtoken,
          publicKey: config.keys.public_key,
          message: "Login successfully",
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
