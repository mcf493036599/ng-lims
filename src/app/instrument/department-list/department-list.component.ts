import { Component, OnInit } from '@angular/core';
import {LimsRestService} from "../../service/lims-rest.service";
import {Department} from "../../class/department";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  title = '仪器所属平台'
  errorMsg: string;
  departmentList: Department[];
  public currentDepartmentID: number;

  constructor(
    private restService: LimsRestService,
    private sharedService: ShareService) { }

  ngOnInit() {
    this.currentDepartmentID = 0; // 0 denotes all departments
    this.getDepartmentList();
    this.sharedService.publishDepartmentID(this.currentDepartmentID);
  }
  getDepartmentList(){
    this.restService.getDepartmentList()
      .subscribe(
        departmentList => this.departmentList = departmentList,
        error => this.errorMsg = <any>error
      )
  }

  select(departmentId: number) {
    this.currentDepartmentID = departmentId;
    this.sharedService.publishDepartmentID(departmentId);
  }

}
