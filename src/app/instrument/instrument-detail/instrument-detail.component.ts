import {Component, OnInit} from '@angular/core';
import {ShareService} from "../../service/share.service";
import {Instrument} from "../../class/instrument";
import {LimsRestService} from "../../service/lims-rest.service";

@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.css']
})
export class InstrumentDetailComponent implements OnInit {
  instrument: Instrument;
  errorMsg: string;

  constructor(private restService: LimsRestService,
              private shareService: ShareService) {
    // this.shareService.detailInstrumentID$
    //   .subscribe(
    //     data => {
    //       this.getInstrument(data)
    //     }
    //   )
  }

  ngOnInit() {
  }

  getInstrument(id: number) {
    this.restService.getInstrument(id)
      .subscribe(
        data => this.instrument = data,
        error => this.errorMsg = error
      )
  }

}
