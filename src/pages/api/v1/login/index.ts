import { loginValidater } from "@/helpers/validaters/calibarate";
import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { BadRequestError } from "@/utils/errors";
import { generateLoginToken } from "@/utils/gendraters";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await loginValidater(req, res);
    try {
      const User = req.body;
      const pass = User.password;
      const logged = await prisma.admin.findFirst({
        where: { OR: [{ email: User.email }, { name: User.mobile }] },
      });

      if (!logged) throw new Error("User not found");
      const hash = await bcrypt.compare(pass, logged.password);
      if (!hash) {
        throw new BadRequestError("Wrong password");
      }
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
          message: "Login successfully",
          status: true,
        },
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
