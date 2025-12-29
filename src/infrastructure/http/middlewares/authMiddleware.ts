import { TokenService } from "@domain/services/TokenService";
import { publicRoutes } from "@infrastructure/config/publicRoutes";
import { Request, Response, NextFunction } from "express";

export const AuthMiddleware =
  (tokenService: TokenService) =>
  (req: Request, res: Response, next: NextFunction) => {
    const isPublic = publicRoutes.some(
      (route) => route.method === req.method && route.path === req.path
    );
    if (isPublic) {
      return next();
    }
    
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader?.split(" ")[1];
    try {
      const payload = tokenService.verify(token);
      (req as any).user = payload;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
