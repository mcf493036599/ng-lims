import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from "../../class/instrument";
import {LimsRestService} from "../../service/lims-rest.service";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {
  instrumentList: Instrument[];
  errorMsg: string;

  constructor(private restService: LimsRestService,
              private shareService: ShareService) {
    this.shareService.selectedDepartmentID$.subscribe(
      data => {
        this.getInstrumentListByDepartment(data);
      }
    )
  }

  ngOnInit() {
    //this.getInstrumentListByDepartment(this.departmentID);
  }

  getInstrumentListByDepartment(departmentID: number) {
    this.restService.getInstrumentListByDepartment(departmentID)
      .subscribe(
        dataList => this.instrumentList = dataList,
        error => this.errorMsg = error
      )
  }


}
