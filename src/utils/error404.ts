import { Request, Response } from "express";
import { ErrorResponse } from "./errorHandler";
/**
 * Middleware for handling route not found errors.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @throws {ErrorResponse} - Throws an ErrorResponse with a "Route not found" message.
 */
export function RouteNotFoundMiddleware(req: Request, res: Response) {
  const message = {
    error: `Route: ${req.originalUrl} not found.`,
  };
  throw new ErrorResponse("Invalid Request", message, 404);
}
export default RouteNotFoundMiddleware;
