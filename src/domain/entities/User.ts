export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly role: 'ADMIN' | 'USER'
  ) {}


  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

}