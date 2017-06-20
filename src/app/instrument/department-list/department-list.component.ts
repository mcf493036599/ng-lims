import {Component, OnInit} from '@angular/core';
import {LimsRestService} from "../../service/lims-rest.service";
import {Department} from "../../class/department";
import {ShareService} from "../../service/share.service";
import {GqlService} from "../../service/gql.service";
import gql from 'graphql-tag';
import {ActivatedRoute, Router} from "@angular/router";
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
              private route: ActivatedRoute,
              private shareService: ShareService,
              private router: Router) {
  }

  ngOnInit() {
    this.getDepartmentList();
    this.currentDepartmentID = 'all';
    this.select(this.currentDepartmentID);
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
    console.log('department list: ' + this.currentDepartmentID);
    this.router.navigate([
      '/instrument',
      {
        outlets: {
          instrumentOutlet: 'instrument-list'
        }
        //departmentId: this.currentDepartmentID
      }
    ])
    this.shareService.publishDepartmentID(departmentId);

  }

}
