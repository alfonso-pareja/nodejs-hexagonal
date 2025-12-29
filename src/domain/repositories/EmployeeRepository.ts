import { CreateEmployeeDTO } from "@application/dtos/CreateEmployeeDto";
import { Employee } from "@domain/entities/Employee";

export interface EmployeeRepository {
    save(data: CreateEmployeeDTO): Promise<Employee>;
    findById(id: string): Promise<Employee | null>;
}
