import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your_secret_key"; 

interface AuthenticatedRequest extends NextApiRequest {
  user?: JwtPayload; 
}

export const authenticateJWT = (handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void> | void) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decoded = jwt.verify(token, secret) as JwtPayload; 
      (req as AuthenticatedRequest).user = decoded; 
      return handler(req as AuthenticatedRequest, res); 
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};





