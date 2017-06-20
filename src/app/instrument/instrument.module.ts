import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstrumentRoutingModule} from './instrument-routing.module';
import {InstrumentComponent} from './instrument/instrument.component';
import {DepartmentListComponent} from './department-list/department-list.component';
import {InstrumentListComponent} from './instrument-list/instrument-list.component';
import {InstrumentCardComponent} from './instrument-card/instrument-card.component';
import {InstrumentDetailComponent} from './instrument-detail/instrument-detail.component';
import { InstrumentTestComponent } from './instrument-test/instrument-test.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    InstrumentComponent,
    DepartmentListComponent,
    InstrumentListComponent,
    InstrumentCardComponent,
    InstrumentDetailComponent,
    InstrumentTestComponent
  ]
})
export class InstrumentModule {
}
