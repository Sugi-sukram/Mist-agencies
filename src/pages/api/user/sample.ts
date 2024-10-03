import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // You can handle different HTTP methods here
  if (req.method === "GET") {
    let users = await prisma.user.findMany({});
    res.status(200).json({ users, message: "Hello, World!" });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
