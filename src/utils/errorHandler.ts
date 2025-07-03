// utils/errorHandler.ts
import { NextApiResponse } from "next";
import { HttpError, InternalServerError } from "@/utils/errors";

export function handleValidationError(error: any, res: NextApiResponse) {
  if (error && error.details) {
    const bodyErrors = error.details.get('body');

    // Check if bodyErrors is an array or has messages
    const validationErrors = Array.isArray(bodyErrors) 
      ? bodyErrors.map(err => err.message)
      : bodyErrors ? [bodyErrors.message] : ["Invalid request data"];

    return res.status(400).json({
      status: false,
      message: "Validation failed",
      errors: validationErrors,
    });
  }

  // Handle other types of errors
  if (error instanceof HttpError) {
    return error.handleResponse(res);
  }

  console.error("Error occurred:", error);
  return new InternalServerError("An unexpected error occurred").handleResponse(res);
}
