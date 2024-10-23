export class HttpError extends Error {
  httpCode: number | undefined;

  constructor(httpCode: number, message?: string) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);

    if (httpCode) this.httpCode = httpCode;
    if (message) this.message = message;
    if (process.env.NODE_ENV == "development") {
      this.stack = new Error().stack;
    }
  }

  public handleResponse(res: any) {
    res.status(this.httpCode || 500).json({
      status: false,
      code: this.httpCode || 500,
      message: this.message || "Internal Server Error",
    });
  }
}

/**
 * Exception for 400 HTTP error (Bad Request).
 */
export class BadRequestError extends HttpError {
  name = "BadRequestError";

  constructor(message?: string) {
    super(400, message || "Bad Request");
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

/**
 * Exception for 403 HTTP error (Forbidden).
 */
export class ForbiddenError extends HttpError {
  name = "ForbiddenError";

  constructor(message?: string) {
    super(403, message || "Forbidden");
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

/**
 * Exception for 409 HTTP error (Conflict).
 */
export class ConflictError extends HttpError {
  name = "ConflictError";

  constructor(message?: string) {
    super(409, message || "Conflict");
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

/**
 * Exception for 500 HTTP error (Internal Server Error).
 */
export class InternalServerError extends HttpError {
  name = "InternalServerError";

  constructor(message: string) {
    super(500, message || "Internal Server Error");
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * Exception for 405 HTTP error (Method Not Allowed).
 */
export class MethodNotAllowedError extends HttpError {
  name = "MethodNotAllowedError";

  constructor(message?: string) {
    super(405, message || "Method Not Allowed");
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
  }
}

/**
 * Exception for 404 HTTP error (Not Found).
 */
export class NotFoundError extends HttpError {
  name = "NotFoundError";

  constructor(message?: string) {
    super(404, message || "Not Found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

/**
 * Exception for 401 HTTP error (Unauthorized).
 */
export class UnauthorizedError extends HttpError {
  name = "UnauthorizedError";

  constructor(message?: string) {
    super(401, message || "Unauthorized");
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

/**
 * Exception for 498 HTTP error (Refresh Token Expired).
 */
export class RefreshTokenError extends HttpError {
  name = "RefreshTokenError";

  constructor(data: {
    error: boolean;
    message: string;
    errormessage?: string;
  }) {
    super(498, data.errormessage || data.message || "Refresh Token Expired");
    Object.setPrototypeOf(this, RefreshTokenError.prototype);
  }
}

