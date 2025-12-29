import { TokenService } from "@domain/services/TokenService";
import { AuthConfig } from "@infrastructure/config/envAuthConfig";
import { Secret, sign, SignOptions, verify } from "jsonwebtoken";

export class TokenServiceImpl implements TokenService {
  constructor(private authConfig: AuthConfig) {}
  sign(payload: any): string {
    const secret: Secret = this.authConfig.jwtSecret as Secret;
    const options: SignOptions = {
      expiresIn: this.authConfig.jwtExpiration as SignOptions["expiresIn"],
    };
    return sign(payload, secret, options);
  }
  
  verify(token: string) {
    return verify(token, this.authConfig.jwtSecret);
  }
}
