import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from "../../class/instrument";
import {LimsRestService} from "../../service/lims-rest.service";
import {ShareService} from "../../service/share.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import gql from 'graphql-tag';
import {GqlService} from "../../service/gql.service";

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
  instrumentList: Instrument[];
  departmentId: string;
  errorMsg: string;

  constructor(private gqlService: GqlService,
              private shareService: ShareService,
              private route: ActivatedRoute) {
    // this.shareService.selectedDepartmentID$.subscribe(
    //   data => {
    //     this.getInstrumentListByDepartment(data);
    //   }
    // )
  }

  ngOnInit() {
    console.log('instrument list init...')
    this.shareService.selectedDepartmentID$.subscribe(
      departmentId => this.getInstrumentListByDepartment(departmentId)
    )
  }

  getInstrumentListByDepartment(departmentID: string) {
    //todo filter by department ID
    this.gqlService.queryGQL(gqlAllInstruments)
      .subscribe(({data}) => {
        this.instrumentList = data['allInstruments'].edges
          .map(data => data.node)
        console.log('get all instruments: ' + this.instrumentList)
      })
  }
}
