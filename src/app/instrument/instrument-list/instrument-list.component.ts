import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from "../../models/instrument";
import {LimsRestService} from "../../service/lims-rest.service";
import {ShareService} from "../../service/share.service";
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import gql from 'graphql-tag';
import {GqlService} from "../../service/gql.service";
import {Observable} from "rxjs/Observable";
import {Department} from "../../models/department";
import {isUndefined} from "util";
const gqlInstrumentsByDepartment = gql`
query($id: ID!){
  department(id: $id) {
    name
    id
    instrumentSet {
      edges {
        node {
          id
          name
          status
          location
          image
          description
          department {
            name
          }
          admin {
            id
            username
            lastName
            firstName
            phone
            email
          }
        }
      }
    }
  }
}`;
const gqlAllInstruments = gql`
query{
  allInstruments{
    edges{
      node{
        id
        name
        status
        location
        image
        description
        department{
          name
        }
        admin{
          id
          username
          lastName
          firstName
          phone
          email
        }
      }
    }
  }
}
`

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {
  instrumentList: Observable<Instrument[]>;
  departmentId: string;
  errorMsg: string;

  constructor(private gqlService: GqlService,
              private shareService: ShareService,
              private route: ActivatedRoute) {
    console.log('instrument list constructed')
    // this.shareService.selectedDepartmentID$.subscribe(
    //   data => {
    //     this.getInstrumentListByDepartment(data);
    //   }
    // )
  }

  ngOnInit() {
    console.log('instrument list init...')
    this.route.params
      .subscribe(
        (params: Params) => {
          this.getInstrumentListByDepartment(params['departmentId'])
        }
      )
    // this.shareService.selectedDepartmentID$.subscribe(
    //   departmentId => {
    //     this.getInstrumentListByDepartment(departmentId);
    //     console.log(`department id in instrument list ${departmentId}`);
    //   }
    // )

  }

  getInstrumentListByDepartment(departmentID: string) {
    console.log(`get instrument list (department id ${departmentID})`)
    // all instruments
    if (isUndefined(departmentID)){
      departmentID = 'all';
    }

    if (departmentID === 'all') {
      this.gqlService.queryGQL(gqlAllInstruments)
        .subscribe(({data}) => {
          this.instrumentList = data['allInstruments'].edges
            .map(data => data.node)
        })
    }
    else {
      this.gqlService.queryGQL(gqlInstrumentsByDepartment, {"id": departmentID})
        .subscribe(({data}) => {
          this.instrumentList = data['department']['instrumentSet']['edges']
            .map(data => data.node)
        })
    }
  }
}
