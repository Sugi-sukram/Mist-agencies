import { contactRequestValidater } from "@/helpers/validaters/calibarate";
import { authenticateJWT } from "@/lib/middleware/jwtMiddleware";
import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs"; // import dayjs
import utc from "dayjs/plugin/utc"; // import UTC plugin for timezone handling
import timezone from "dayjs/plugin/timezone"; // import timezone plugin

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const products = await prisma.products.findMany({});
      res
        .status(200)
        .json({ products, message: "Products fetched successfully.", status: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    await contactRequestValidater(req, res);
    try {
      const body = req.body;
      const contacts = await prisma.products.create({
        data: {
          ...body,
        },
      });
      res.status(200).json({
        data: {
          contacts,
          message: "product saved successfully.",
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

// export default authenticateJWT(handler);
export default handler;
