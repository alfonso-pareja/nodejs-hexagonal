import { LoginUseCase } from "@application/usecases/auth/LoginUseCase";
import { CreateEmployeeUseCase } from "@application/usecases/employee/CreateEmployeeUseCase";
import { TokenService } from "@domain/services/TokenService";
import { UserService } from "@domain/services/UserService";

export interface Dependencies {
    services: {
        tokenService: TokenService;
        userService: UserService;
    },
    useCases: {
        login: LoginUseCase,
        createEmployee: CreateEmployeeUseCase
    }
}