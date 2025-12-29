import { CreateEmployeeDTO } from "@application/dtos/CreateEmployeeDto";
import { Employee } from "@domain/entities/Employee";
import { EmployeeRepository } from "@domain/repositories/EmployeeRepository";

export class CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute(data: CreateEmployeeDTO): Promise<Employee> {
    const employee = new Employee(this.generateId(), data.name, data.email);
    return await this.employeeRepository.save(employee);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
