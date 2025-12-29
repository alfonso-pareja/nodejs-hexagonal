import { InvalidCredentialsError } from "@domain/errors/InvalidCredentialsError";
import { Request, Response, NextFunction } from "express";

export function ErrorHandlerMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {

  if (err instanceof InvalidCredentialsError) {
    return res.status(401).json({ error: err.message });
  }
  return res.status(500).json({ error: "Internal server error" });
}
