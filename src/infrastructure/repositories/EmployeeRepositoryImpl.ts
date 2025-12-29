import { CreateEmployeeDTO } from "@application/dtos/CreateEmployeeDto";
import { Employee } from "@domain/entities/Employee";
import { EmployeeRepository } from "@domain/repositories/EmployeeRepository";
import { EmployeeGateway } from "@infrastructure/gateway/EmployeeGateway";

export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(private readonly gateway: EmployeeGateway) {}

  async save(data: CreateEmployeeDTO): Promise<Employee> {
    return this.gateway.save(data);
  }

  async findById(id: string): Promise<Employee | null> {
    return this.gateway.findById(id);
  }
}
