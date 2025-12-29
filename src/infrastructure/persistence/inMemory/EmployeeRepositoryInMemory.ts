import { Employee } from "@domain/entities/Employee";
import { CreateEmployeeDTO } from "@application/dtos/CreateEmployeeDto";
import * as crypto from "crypto";

export class EmployeeInMemoryStore {
  private employees: Employee[] = [];

  create(data: CreateEmployeeDTO): Employee {
    const employee = new Employee(
      crypto.randomUUID(),
      data.name,
      data.email
    );

    this.employees.push(employee);
    return employee;
  }

  findById(id: string): Employee | null {
    return this.employees.find(e => e.id === id) ?? null;
  }
}
