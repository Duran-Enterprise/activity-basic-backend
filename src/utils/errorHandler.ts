import { NextFunction, Response } from "express";
/**
 * Custom error class for structured error responses in Express applications.
 *
 * This class extends the built-in Error class and provides a way to create
 * consistent error responses with a message, data, and status code.
 *
 * @param {string} message - The error message.
 * @param {any} data - Additional data associated with the error (optional).
 * @param {number} status - The HTTP status code of the error (default: 400).
 * @example
 * // Creating a custom error response
 * throw new ErrorResponse("Invalid User Details", { field: "username" }, 422);
 */
export class ErrorResponse extends Error {
  /**
   * Create a new ErrorResponse instance.
   *
   * @constructor
   * @param {string} message - The error message.
   * @param {any} data - Additional data associated with the error (optional).
   * @param {number} status - The HTTP status code of the error (default: 400).
   */
  constructor(
    message: string,
    public data: any,
    public status: number = 400,
  ) {
    super(message);
  }
}
/**
 * Middleware for handling custom error responses in Express applications.
 *
 * This middleware catches errors thrown during request processing and sends
 * consistent error responses. It extracts error information from the caught error
 * object, including the error message, status code, and additional data.
 *
 * @param {any} err - The caught error object.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @example
 * // Throwing an error in a route handler
 * app.get("/example", (req, res, next) => {
 *     try {
 *         // Your logic
 *         if (someCondition) {
 *             throw new ErrorResponse("Invalid condition", { details: "Additional info" }, 422);
 *         }
 *         // ...
 *     } catch (error) {
 *         next(error);
 *     }
 * });
 */
export function ErrorHandlerMiddleware(
  err: any,
  req: any,
  res: Response,
  next: NextFunction,
): void {
  const errorData = err.data || err;
  const errorStatus = err.status || 400;
  const message = err.message
    ? "Invalid Request"
    : err.message || "Unknown Error";

  if (typeof errorData === "object") {
    res.status(errorStatus).json({ message, data: { ...errorData } });
  } else {
    res.status(errorStatus).json({ message, errorData });
  }
  console.log(
    `\x1b[31m ❗[ERROR]\x1b[0m: ${message} - ${JSON.stringify(
      errorData,
      null,
      4,
    )}`,
  );
}
export default ErrorHandlerMiddleware;
