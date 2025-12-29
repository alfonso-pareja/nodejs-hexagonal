import { InvalidCredentialsError } from "@domain/errors/InvalidCredentialsError";
import { TokenService } from "@domain/services/TokenService";
import { UserService } from "@domain/services/UserService";

export class LoginUseCase {
    constructor(private readonly tokenService: TokenService, private readonly userService: UserService) { }

    async execute(email: string, password: string) {
        const user = await this.userService.validateUser(email, password);  
        if (!user) {
            throw new InvalidCredentialsError();
        }
        return { accessToken: this.tokenService.sign({ sub: user.id }) };
    }
}