import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError, InternalServerError } from "@/utils/errors";
import config from "@/config";

const secret = config.keys.private_key || "your_secret_key";

export interface AuthenticatedRequest extends NextApiRequest {
  user?: JwtPayload;
}

// List of paths that don't require authentication
const ignoredPaths = ["/api/v1/login", ];

export const authenticateJWT = (
  handler: (req: AuthenticatedRequest | NextApiRequest, res: NextApiResponse) => Promise<void> | void
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Bypass authentication for specific paths
    if (ignoredPaths.includes(req.url || "")) {
      return handler(req as NextApiRequest, res);
    }

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return new UnauthorizedError("Token is missing").handleResponse(res);
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, secret) as JwtPayload;
      // Attach the decoded token to the request
      (req as AuthenticatedRequest).user = decoded;
      // Proceed with the handler
      return handler(req as AuthenticatedRequest, res);
    } catch (error: any) {
      // Handle token-related errors
      if (error.name === "TokenExpiredError") {
        return new UnauthorizedError("Token has expired").handleResponse(res);
      } else if (error.name === "JsonWebTokenError") {
        return new UnauthorizedError("Invalid token").handleResponse(res);
      }
      // Handle unexpected errors
      return new InternalServerError("Internal server error during token validation").handleResponse(res);
    }
  };
};
