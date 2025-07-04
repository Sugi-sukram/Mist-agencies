// import prisma from "./index.js";
import { PrismaClient } from '../prisma';
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
const prisma =  new PrismaClient();

export async function main() {
  console.log(`Start seeding ...`);
  const salt = await bcrypt.genSalt(14);
  let hash = await bcrypt.hash("tn69s6426", salt);
  const user = await prisma.admin.create({
    data: {
      name: "Mistbusiness",
      email: "mistbusiness2024@gmail.com",
      password: hash,
      mobile: "9876543210",
      isProductOwner: true,
      isActive: true,
      address: "Noida",
      pincode: "641109",
      lastLogin: new Date(),      
      profileURL: "https://i.ibb.co/5s5W8cP/IMG-20220303-0001-1.jpg",
    },
  });
  console.log(`Created user with id: ${user.id}`);
  console.log(`Seeding finished.`);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })