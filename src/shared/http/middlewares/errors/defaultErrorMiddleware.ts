/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

export function defaultErrorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
): Response {
  // eslint-disable-next-line no-console
  console.error(err);

  return res.status(500).json({
    status: 500,
    message: "Unhandled server error.",
  });
}
