import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstrumentRoutingModule} from './instrument-routing.module';
import {InstrumentComponent} from './instrument/instrument.component';
import {DepartmentListComponent} from './department-list/department-list.component';
import {InstrumentListComponent} from './instrument-list/instrument-list.component';
import {InstrumentCardComponent} from './instrument-card/instrument-card.component';
import {UserInfoCardComponent} from './user-info-card/user-info-card.component';
import {InstrumentDetailComponent} from './instrument-detail/instrument-detail.component';

@NgModule({
  imports: [
    CommonModule,
    InstrumentRoutingModule
  ],
  declarations: [
    InstrumentComponent,
    DepartmentListComponent,
    InstrumentListComponent,
    InstrumentCardComponent,
    UserInfoCardComponent,
    InstrumentDetailComponent
  ]
})
export class InstrumentModule {
}
