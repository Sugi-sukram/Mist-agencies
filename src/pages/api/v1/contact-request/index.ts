import { contactRequestValidater } from "@/helpers/validaters/calibarate";
import { authenticateJWT } from "@/lib/middleware/jwtMiddleware";
import prisma from "@/loaders/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs"; // import dayjs
import utc from "dayjs/plugin/utc"; // import UTC plugin for timezone handling
import timezone from "dayjs/plugin/timezone"; // import timezone plugin

dayjs.extend(utc);
dayjs.extend(timezone);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const currentDate = dayjs(); // get the current date
      const thirtyDaysAgo = currentDate.subtract(30, "day"); // subtract 30 days from the current date

      // Fetch records from the last 30 days
      const contacts = await prisma.contactRequests.findMany({
        where: {
          createdAt: {
            gte: thirtyDaysAgo.toDate(), // records from 30 days ago until now
            lte: currentDate.toDate(), // up to the current date
          },
        },
      });

      res
        .status(200)
        .json({ contacts, message: "Contacts fetched successfully." });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    await contactRequestValidater(req, res);
    try {
      const body = req.body;
      const contacts = await prisma.contactRequests.create({
        data: {
          ...body,
        },
      });
      res.status(200).json({
        data: {
          contacts,
          message:
            "Thank you for contacting us! We will get back to you shortly.",
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
