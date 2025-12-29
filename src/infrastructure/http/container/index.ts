
import { TokenServiceImpl } from '@infrastructure/auth/TokenServiceImpl';
import { Dependencies } from './interfaces/dependencies';
import { LoginUseCase } from '@application/usecases/auth/LoginUseCase';
import { UserServiceImpl } from '@infrastructure/services/UserServiceImpl';
import { envAuthConfig } from '@infrastructure/config/envAuthConfig';
import { CreateEmployeeUseCase } from '@application/usecases/employee/CreateEmployeeUseCase';
import { EmployeeRepositoryImpl } from '@infrastructure/repositories/EmployeeRepositoryImpl';
import { EmployeeGatewayImpl } from '@infrastructure/gateway/EmployeeGateway';
import { EmployeeInMemoryStore } from '@infrastructure/persistence/inMemory/EmployeeRepositoryInMemory';

export function buildDependencies(): Dependencies {

  // Gateways
  const employeeGateway = new EmployeeGatewayImpl(new EmployeeInMemoryStore() );

  // Infrastructure
  const tokenService = new TokenServiceImpl(envAuthConfig);
  const userService = new UserServiceImpl();
  const employeeRepository = new EmployeeRepositoryImpl(employeeGateway);

  // Use cases
  const loginUseCase = new LoginUseCase(
    tokenService,
    userService
  );
  const createEmployeeUseCase = new CreateEmployeeUseCase(
    employeeRepository
  );


  return {
    useCases: {
      login: loginUseCase,
      createEmployee: createEmployeeUseCase
    },
    services: {
      tokenService,
      userService,
    },
  };
}
