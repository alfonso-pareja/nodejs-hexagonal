import { CreateEmployeeDTO } from "@application/dtos/CreateEmployeeDto";
import { Employee } from "@domain/entities/Employee";
import { EmployeeInMemoryStore } from "@infrastructure/persistence/inMemory/EmployeeRepositoryInMemory";

export interface EmployeeGateway {
    save(data: CreateEmployeeDTO): Promise<Employee>;
    findById(id: string): Promise<Employee | null>;
}

export class EmployeeGatewayImpl implements EmployeeGateway {
    constructor(private readonly store: EmployeeInMemoryStore) {}

    async save(data: CreateEmployeeDTO): Promise<Employee> {
        await new Promise(res => setTimeout(res, 100));
        return this.store.create(data);
    }

    async findById(id: string): Promise<Employee | null> {
        return this.store.findById(id);
    }
}