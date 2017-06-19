import {Component, OnInit} from '@angular/core';
import {LimsRestService} from "../../service/lims-rest.service";
import {Department} from "../../class/department";
import {ShareService} from "../../service/share.service";
import {GqlService} from "../../service/gql.service";
import gql from 'graphql-tag';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  title = '仪器所属平台'
  errorMsg: string;
  departmentList: Department[];
  public currentDepartmentID: string;
  gqlString = gql`
    query{
      allDepartments{
        edges{
          node{
            id
            name
          }
        }
      }
   }`

  constructor(private gqlService: GqlService,
              private sharedService: ShareService) {
  }

  ngOnInit() {
    this.getDepartmentList();
    this.currentDepartmentID = 'all'
  }

  getDepartmentList() {
    this.gqlService.queryGQL(this.gqlString).subscribe(
      ({data}) => {
        this.departmentList = data['allDepartments'].edges.map(data => data.node)
      }
    )
  }

  select(departmentId: string) {
    this.currentDepartmentID = departmentId;
    //this.sharedService.publishDepartmentID(departmentId);
  }

}
