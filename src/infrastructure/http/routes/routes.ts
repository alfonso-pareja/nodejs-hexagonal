import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { Dependencies } from "../container/interfaces/dependencies";
import { loginValidator } from "../validators/loginValidator";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { AuthController } from "../controllers/AuthController";
import { EmployeeController } from "../controllers/EmployeeController";

export function buildRoutes(deps: Dependencies) {
  const router = Router();

  const authController = new AuthController(deps.useCases.login);
  const employeeController = new EmployeeController(
    deps.useCases.createEmployee
  );

  router.post(
    "/auth/login",
    loginValidator,
    validationMiddleware,
    authController.login
  );

  //JWT Middleware
  router.use(AuthMiddleware(deps.services.tokenService));

  router.post("/employees", employeeController.create);
  
  return router;
}
