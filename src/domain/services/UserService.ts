import { User } from "@domain/entities/User";

export interface UserService {
    validateUser(email: string, password: string): Promise<User | null>;
}