export class User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;

 fullNameCN(): string{
   return this.last_name + this.first_name
 }

}
