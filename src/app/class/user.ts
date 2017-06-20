export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;

  getFullNameCN(): string{
    return this.lastName + this.firstName;
  }

}
