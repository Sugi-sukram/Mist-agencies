import jwt from "jsonwebtoken";
import config from "@/config/index";
export const generateLoginToken = (
  data: any,
  key?: string
): { token: string; refreshtoken: string } => {
  if (config.keys.private_key === undefined)
    return { token: "", refreshtoken: "" };
  let privateKey = (key || config.keys.private_key).replace(/\\n/gm, "\n");
  let token = jwt.sign(data, privateKey, {
    expiresIn: `8h`,
    algorithm: "RS256",
  });
  let refreshtoken = jwt.sign(data, privateKey, {
    expiresIn: "3d",
    algorithm: "RS256",
  });
  return { token, refreshtoken };
};
