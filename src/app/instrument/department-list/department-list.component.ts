import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LimsRestService} from "../../service/lims-rest.service";
import {Department} from "../../models/department";
import {ShareService} from "../../service/share.service";
import {GqlService} from "../../service/gql.service";
import gql from 'graphql-tag';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, AfterViewInit {
  title = '仪器所属平台'
  errorMsg: string;
  departmentList: Department[];
  //public currentDepartmentID: string;
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
              private shareService: ShareService,
              private router: Router) {
  }

  ngOnInit() {
    console.log('department list init ...')
    this.getDepartmentList();
  }
  ngAfterViewInit() {
  }

  getDepartmentList() {
    this.gqlService.queryGQL(this.gqlString).subscribe(
      ({data}) => {
        this.departmentList = data['allDepartments'].edges.map(data => data.node)
      }
    )
  }

  // select(departmentId: string) {
  //   //this.currentDepartmentID = departmentId;
  //   console.log('selected department: ' + departmentId);
  //   this.shareService.publishDepartmentID(departmentId);
  //   this.router.navigate(['/instrument/instrument-list', {'departmentId': departmentId}])
  //   // this.router.navigate([
  //   //   '/instrument',
  //   //   {
  //   //     outlets: {
  //   //       instrumentOutlet: 'instrument-list'
  //   //     }
  //   //     //departmentId: this.currentDepartmentID
  //   //   }
  //   // ])
  //
  //
  // }

}
