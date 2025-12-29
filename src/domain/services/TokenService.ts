
export interface TokenService {
    sign(payload: any): string;
    verify(token: string): any;
}