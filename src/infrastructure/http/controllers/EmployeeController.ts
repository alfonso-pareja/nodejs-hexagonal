import { CreateEmployeeDTO } from "@application/dtos/CreateEmployeeDto";
import { CreateEmployeeUseCase } from "@application/usecases/employee/CreateEmployeeUseCase";
import { Request, Response } from "express";

export class EmployeeController {
  constructor(private readonly createEmployeeUseCase: CreateEmployeeUseCase) {}

  create = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).json({ error: "Missing request body" });
      return;
    }

    const employeeData: CreateEmployeeDTO = req.body as unknown as CreateEmployeeDTO;
    const employee = await this.createEmployeeUseCase.execute(employeeData);
    res.status(201).json(employee);
  }

}
