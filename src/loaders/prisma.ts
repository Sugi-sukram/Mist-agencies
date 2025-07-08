// src/loaders/prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("Prisma Client Connected");
  })
  .catch((err: any) => {
    console.error("Failed to connect Prisma Client", err);
  });

export default prisma;
