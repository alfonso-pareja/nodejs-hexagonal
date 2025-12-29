import { LoginUseCase } from "@application/usecases/auth/LoginUseCase";
import { Request, Response } from "express";

export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await this.loginUseCase.execute(email, password);
    res.status(200).json(result);
  };
}
