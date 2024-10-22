export class HttpError extends Error {
    httpCode: number | undefined;
  
    constructor(httpCode: number, message?: string) {
      super();
      Object.setPrototypeOf(this, HttpError.prototype);
  
      if (httpCode) this.httpCode = httpCode;
      if (message) this.message = message;
      if (process.env.NODE_ENV == "development") {
        this.stack = new Error().stack;
      }
    }
  }
  
  /**
   * Exception for 400 HTTP error.
   */
  export class BadRequestError extends HttpError {
    name = "BadRequestError";
  
    constructor(message?: string) {
      super(400);
      Object.setPrototypeOf(this, BadRequestError.prototype);
  
      if (message) this.message = message;
    }
  }
  
  /**
   * Exception for 403 HTTP error.
   */
  export class ForbiddenError extends HttpError {
    name = "ForbiddenError";
  
    constructor(message?: string) {
      super(403);
      Object.setPrototypeOf(this, ForbiddenError.prototype);
    
      if (message) this.message = message;
    }
  }
  export class ConflictError extends HttpError {
    name = "ConflictError";
  
    constructor(message?: string) {
      super(409);
      Object.setPrototypeOf(this, ForbiddenError.prototype);
  
      if (message) this.message = message;
    }
  }
  
  /**
   * Exception for 500 HTTP error.
   */
  export class InternalServerError extends HttpError {
    name = "InternalServerError";
  
    constructor(message: string) {
      super(500);
      Object.setPrototypeOf(this, InternalServerError.prototype);
  
      if (message) this.message = message;
    }
  }
  
  /**
   * Exception for todo HTTP error.
   */
  export class MethodNotAllowedError extends HttpError {
    name = "MethodNotAllowedError";
  
    constructor(message?: string) {
      super(405);
      Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
  
      if (message) this.message = message;
    }
  }
  
  /**
   * Exception for 404 HTTP error.
   */
  export class NotFoundError extends HttpError {
    name = "NotFoundError";
  
    constructor(message?: string) {
      super(404);
      Object.setPrototypeOf(this, NotFoundError.prototype);
  
      if (message) this.message = message;
    }
  }
  
  /**
   * Exception for 401 HTTP error.
   */
  export class UnauthorizedError extends HttpError {
    name = "UnauthorizedError";
  
    constructor(message?: string) {
      super(401);
      Object.setPrototypeOf(this, UnauthorizedError.prototype);
  
      if (message) this.message = message;
    }
  }
  
  /**
   * Refresh token exprired 498 HTTP error.
   */
  export class RefreshTokenError extends HttpError {
    name = "Refresh token exprired Error";
  
    constructor(data: {
      error: boolean;
      message: string;
      errormessage?: string;
    }) {
      super(498);
      Object.setPrototypeOf(this, RefreshTokenError.prototype);
      // if (data.message) this.message = data.message;
      if (data.errormessage) this.message = data.errormessage || data.message;
    }
  }
  