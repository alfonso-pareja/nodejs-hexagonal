
// Podria ser un gateway en vez de service si va a otro microservicio

import { User } from "@domain/entities/User";
import { UserService } from "@domain/services/UserService";

export class UserServiceImpl implements UserService {
    async validateUser(email: string, password: string): Promise<User | null> {
        if(email === "admin@test.cl" && password === "1234") {
            return new User("1", email, "ADMIN");
        }
        return null;
    }
}