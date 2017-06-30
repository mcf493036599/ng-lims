import {Instrument} from "./instrument";
import {User} from "./user";
export class Reservation {
  instrument?: Instrument;
  user?: User;
  startTime: string;
  endTime: string;
}
