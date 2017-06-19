import {User} from "./user";
import {Department} from "./department";
import {Reservation} from "./reservation";
export class Instrument {
  id: number;
  name: string;
  status: string;
  location: string;
  image: string;
  description: string;
  department?: Department;
  admin?: User;
  reservationSet?: Reservation[];
}
