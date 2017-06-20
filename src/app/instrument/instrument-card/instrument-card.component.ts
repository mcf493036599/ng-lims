import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from "../../class/instrument";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.css']
})
export class InstrumentCardComponent implements OnInit {
  @Input() instrument: Instrument;

  constructor(private shareService: ShareService) { }

  ngOnInit() {
  }

  viewDetail(){
    console.log(`view detail ${this.instrument.id}`)
    // this.shareService.publishDetailInstrumentID(this.instrument.id);
  }

}
