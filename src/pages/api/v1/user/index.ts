import { authenticateJWT } from "@/lib/middleware/jwtMiddleware";
import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // You can handle different HTTP methods here
  if (req.method === "GET") {
    let users = await prisma.admin.findMany({});

    res.status(200).json({ users, message: "Hello, World!" });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default authenticateJWT(handler);
