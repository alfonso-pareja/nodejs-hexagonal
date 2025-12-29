

export interface AuthConfig {
  jwtSecret: string;
  jwtExpiration: string;
}

export const envAuthConfig: AuthConfig = {
  jwtSecret: process.env.JWT_SECRET || 'default_secret',
  jwtExpiration: process.env.JWT_EXPIRATION || '1h',
};

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

if (!process.env.JWT_EXPIRATION) {
  throw new Error('JWT_EXPIRATION is not defined');
}