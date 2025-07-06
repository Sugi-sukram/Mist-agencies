import { config } from "dotenv";
let verify_env = config();

if (verify_env.error) {
  throw new Error("Env File Not Found");
}

export default {
  host: process.env.HOST,
  port: process.env.PORT,
  keys: {
    public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  },
  db: {
    url: process.env.DATABASE_URL?.split("?schema=")[0] || "",
    auto_migrate: process.env.AUTO_MIGRATE === "true",
  },
  auth: {
    salt: Number(process.env.SALTROUND),
  },
};
