import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShareService {
  //used for file instruments by department id
  private selectedDepartmentID = new Subject<string>();
  selectedDepartmentID$ = this.selectedDepartmentID.asObservable();
  //used for view detail info of a instrument
  private detailInstrumentID = new Subject<string>();
  detailInstrumentID$ = this.detailInstrumentID.asObservable();

  constructor() { }
  publishDepartmentID (id: string) {
    this.selectedDepartmentID.next(id);
  }

  publishDetailInstrumentID(id: string) {
    this.detailInstrumentID.next(id);
  }
}
